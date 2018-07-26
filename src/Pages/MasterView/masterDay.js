import React, { Component } from 'react'
// Components
import MasterShift from './masterShift';
// GraphQL
// Context
import { MasterShiftContext, MasterShiftProvider } from './masterContext';
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/masterPage.scss';

const MasterDay = ({ dayName, shifts }) => {
    return (
        <div className="master-day">
            <span className="master-title">{dayName}</span>
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