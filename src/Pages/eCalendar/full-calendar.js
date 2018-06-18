/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import EmployeeCalendar from './/employee-calendar'
import UserList from './/user-list'
import UserInfo from './/individualUserPage'
import ActiveSchedule from './/active-user-schedule'
import Sidebar from '../sidebar.js'
import Logo from '../chaus-logo.js'
import ColorLegend from '../color-legend';

const legend = {
    "Undetermined": "#01b4bc",
    "Preferred": "#5fa55a",
    "Available": "#f6d51f",
    "Not Preferred": "#fa8925",
    "Unavailable": "#fa5457"
}

const FullCalendar = ({activeUserRole}) => {
    
    return (
        <div>
            <Sidebar/>
            <MuiThemeProvider>
                <div style={{display: 'flex', paddingTop: 60}}>
                    <div style={{flexGrow: 0.3}} >
                        {activeUserRole == 'admin'
                        ? <UserList />
                        : <UserInfo />}
                    </div>
                    <EmployeeCalendar/>
                    <ActiveSchedule/>
                    <ColorLegend legend={legend} />
                </div>
            </MuiThemeProvider>
            <Logo/>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            activeUserRole: state.auth.activeUserReducer.role
        }
    }
)(FullCalendar)