import React, { Component } from 'react'
// Components
import MasterShift from './masterShift';
// Context
import { MasterShiftContext, MasterShiftProvider } from './masterContext';

// SASS
import '../../css/masterPage.scss';

const MasterDay = ({ dayName, shifts }) => {
    return (
        <div className="calendar-day">
            <span className="calendar-day-title">{dayName}</span>
            {shifts.map((shift) => {
                // Change logic here if availability structure changes
                var contextValues = {
                    dayName: dayName,
                    shiftId: shift.id,
                    availabilities: shift.availabilities,
                    scheduled: shift.scheduled,
                    closed: shift.closed,
                    hour: shift.startTime,
                    changed: false
                };
                return (
                    <MasterShiftProvider 
                    value={contextValues}
                    key={shift.id}>
                        <MasterShift 
                        key={shift.id} 
                        id={shift.id} 
                        closed={shift.closed}
                        />
                    </MasterShiftProvider>
                )
            })}
        </div>
    )
}

export default MasterDay;