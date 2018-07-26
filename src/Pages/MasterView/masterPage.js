import React, { Component } from 'react';
// Components
import MasterCalendar from './masterCalendar';
import MasterOptions from './masterOptions';
import Sidebar from '../sidebar';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/masterPage.scss';

const MasterPage = ({ }) => {
    return (
        <div>
            <Sidebar />
            <div className="master-container">
                <div></div>
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