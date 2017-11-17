/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import EmployeeCalendar from '../containers/employee-calendar'
import UserList from '../containers/user-list'
import ActiveSchedule from '../containers/active-user-schedule'


const FullCalendar = () => {
    return (
        <MuiThemeProvider>
            <div style={{display: 'flex', paddingTop: 60}}>
                <div style={{flexGrow: 0.3}} >
                    <UserList />
                </div>
                <EmployeeCalendar/>
                <ActiveSchedule/>
            </div>
        </MuiThemeProvider>
    )
}

export default FullCalendar