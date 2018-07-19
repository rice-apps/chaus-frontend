import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
// Components
import EmployeeDay from './employeeDay';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const EmployeeCalendar = ({ schedule }) => {
    var week = schedule.week;
    return (
        <div className="employee-calendar">
            {week && Object.keys(week).map((dayName) => {
                var day = week[dayName];
                return (
                    <EmployeeDay
                        dayName={dayName}
                        shifts={day.shifts}
                        key={dayName}
                    />
                )
            })}
        </div>
    )
}

export default connect(
    (state) => {
        return {
            schedule: state.eCal.newScheduleReducer.schedule
        }
    }
)(EmployeeCalendar);