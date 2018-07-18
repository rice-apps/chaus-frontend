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
            {schedule && schedule.map((day) => {
                return (
                    <EmployeeDay
                        dayName={day.dayName}
                        shifts={day.shifts}
                        key={day.dayName}
                    />
                )
            })}
        </div>
    )
}

export default EmployeeCalendar