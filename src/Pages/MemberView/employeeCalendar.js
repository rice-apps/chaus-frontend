import React, {Component} from 'react'
// Components
import EmployeeDay from './employeeDay';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const EmployeeCalendar = ({ schedule }) => {
    console.log(schedule);
    return (
        <div className="employee-calendar">
            {schedule && Object.keys(schedule).map((dayName) => {
                var day = schedule[dayName];
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

export default EmployeeCalendar