import React, { Component } from 'react';
// Components
import ColorLegend from '../color-legend';
import MasterCalendar from './masterCalendar';
import MasterOptions from './masterOptions';
import Sidebar from '../sidebar';

// SASS
import '../../css/masterPage.scss';
import '../../css/calendar.scss';

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
            <div className="main-container">
                <ColorLegend legend={legend} />
                <div className="calendar-container">
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