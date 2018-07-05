import React, {Component} from 'react'
// Components
import EmployeeCalendar from './employeeCalendar';
import UserOptions from './userOptions';
// GraphQL
import { graphql, compose } from 'react-apollo';
import { EmployeeCalendarQuery } from '../../graphql/queries/employee.graphql';
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const MemberPage = ({ data: { schedules = [{week: []}] } }) => {
    console.log(schedules);
    // Schedules is array so get the first
    schedules = schedules[0];
    return (
        <div className="main-container">
            <div className="employee-calendar-container">
                <EmployeeCalendar 
                    schedule={schedules.week}
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
    })
    // graphql(CreateUser, { name: 'CreateUser' })
)(MemberPage)