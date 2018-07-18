import React, {Component} from 'react'
// Components
import EmployeeCalendar from './employeeCalendar';
import UserOptions from './userOptions';
// GraphQL
import { graphql, compose } from 'react-apollo';
import { EmployeeCalendarQuery } from '../../graphql/queries/employee.graphql';
import { SetUserPreference, SaveUserPreference } from '../../graphql/mutations/employee.graphql';
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const MemberPage = ({ data: { schedules = [{week: []}] }, SetUserPreference, SaveUserPreference }) => {
    console.log(schedules);
    // Schedules is array so get the first
    schedules = schedules[0];
    return (
        <div className="main-container">
            <div className="employee-calendar-container">
                <EmployeeCalendar 
                    schedule={schedules.week}
                    SetUserPreference={SetUserPreference}
                    SaveUserPreference={SaveUserPreference}
                />
            </div>
            <div className="user-options">
                <UserOptions />
            </div>
        </div>
    )
}

export default compose(
    graphql(EmployeeCalendarQuery, { 
        options: {
            variables: {
                netid: "wsm3"
            }
        }
    }),
    graphql(SetUserPreference, { 
        props: ({ mutate }) => ({
            SetUserPreference: (id, availability) => mutate({
                variables: {
                    id, availability
                },
                optimisticResponse: {
                    __typename: "Mutation",
                    updateShiftAvailability: {
                        id: id,
                        __typename: "UserAvailability",
                        availability: availability
                    }
                }
            })
        })
     }),
    graphql(SaveUserPreference, { name: 'SaveUserPreference' })
    // graphql(CreateUser, { name: 'CreateUser' })
)(MemberPage)