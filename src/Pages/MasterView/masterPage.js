import React, { Component } from 'react';
// Components
import MasterCalendar from './masterCalendar';
import MasterOptions from './masterOptions';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/masterPage.scss';

const MasterPage = ({ }) => {
    return (
        <div className="main-container">
            <div className="master-calendar-container">
                <MasterCalendar />
            </div>
            <div className="master-options">
                <MasterOptions />
            </div>
        </div>
    )
}

export default MasterPage;