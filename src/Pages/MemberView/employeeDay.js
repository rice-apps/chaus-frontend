import React, { PureComponent } from 'react'
// Components
import EmployeeShift from './employeeShift';
import { EmployeeShiftContext } from './employeeContext';

const EmployeeDay = ({ dayName, shifts }) => {
    return (
        <div className="calendar-day">
            <span className="calendar-day-title">{dayName}</span>
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