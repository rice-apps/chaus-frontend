import React, {Component} from 'react';
// Components
import EmployeeCalendar from './employeeCalendar';
import UserOptions from './userOptions';
import ColorLegend from '../color-legend';
import Sidebar from '../sidebar';

// SASS
import '../../css/memberPage.scss';
import '../../css/calendar.scss';

const legend = {
    "Undetermined": "#01b4bc",
    "Preferred": "#5fa55a",
    "Available": "#f6d51f",
    "Not Preferred": "#fa8925",
    "Unavailable": "#fa5457"
}

const MemberPage = ({ }) => {
    return (
        <div>
            <Sidebar />
            <div className="main-container">
                <ColorLegend legend={legend} />
                <div className="calendar-container">
                    <EmployeeCalendar />
                </div>
                <div className="user-options">
                    <UserOptions />
                </div>
            </div>
        </div>
    )
}

export default MemberPage;