import React, { PureComponent } from 'react'
// Components
import EmployeeShift from './employeeShift';
import { EmployeeShiftContext } from './employeeContext';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const EmployeeDay = ({ dayName, shifts }) => {
    return (
        <div className="employee-day">
            <span className="employee-title">{dayName}</span>
            {shifts.map((shift) => {
                var contextValues = {
                    dayName: dayName,
                    shift: shift.id,
                    availability: shift.availabilities,
                    closed: shift.closed,
                    startTime: shift.startTime,
                    changed: false
                };
                // Change logic here if availability structure changes
                return (
                    <EmployeeShiftContext.Provider value={contextValues}>
                        <EmployeeShift key={shift.id} />
                    </EmployeeShiftContext.Provider>
                )
            })}
        </div>
    )
}

export default EmployeeDay