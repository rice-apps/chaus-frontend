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
            <h1>{dayName}</h1>
            {shifts.map((shift) => {
                // Change logic here if availability structure changes
                var contextValues = {
                    dayName: dayName,
                    shiftId: shift.id,
                    availabilities: shift.availabilities,
                    closed: shift.closed,
                    hour: shift.startTime,
                    changed: false
                };
                return (
                    <MasterShiftProvider 
                    value={contextValues}
                    key={shift.id}>
                        <MasterShift key={shift.id} id={shift.id} />
                    </MasterShiftProvider>
                )
            })}
        </div>
    )
}

export default MasterDay;