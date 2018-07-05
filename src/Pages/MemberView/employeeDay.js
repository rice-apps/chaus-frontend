import React, {Component} from 'react'
// Components
import EmployeeShift from './employeeShift';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const EmployeeDay = ({ dayName, shifts }) => {
    return (
        <div className="employee-day">
            <h1>{dayName}</h1>
            {shifts.map((shift) => {
                // Change logic here if availability structure changes
                let availability = shift.availabilities[0].availability;
                let startTime = shift.startTime;
                return (
                    <EmployeeShift
                        availability={availability}
                        key={startTime}
                    />
                )
            })}
        </div>
    )
}

export default EmployeeDay