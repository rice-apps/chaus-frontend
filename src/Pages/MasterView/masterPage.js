import React, { Component } from 'react';
// Components
import ColorLegend from '../color-legend';
import MasterCalendar from './masterCalendar';
import MasterOptions from './masterOptions';
import Sidebar from '../sidebar';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/masterPage.scss';

const legend = {
    "Empty": "#5fa55a",
    "Has Room": "#f6d51f",
    "Full Shift": "#fa8925",
    "Overbooked": "#fa5457"
}

const MasterPage = ({ }) => {
    return (
        <div>
            <Sidebar />
            <div className="master-container">
                <ColorLegend legend={legend} />
                <div className="master-calendar-container">
                    <MasterCalendar />
                </div>
                <div className="master-options">
                    <MasterOptions />
                </div>
            </div>
        </div>
    )
}

export default MasterPage;