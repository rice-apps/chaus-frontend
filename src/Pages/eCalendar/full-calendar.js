/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import EmployeeCalendar from './/employee-calendar'
import UserList from './/user-list'
import ActiveSchedule from './/active-user-schedule'
import Sidebar from '../sidebar.js'
import Logo from '../chaus-logo.js'


const FullCalendar = () => {
    
    return (
        <div>
            <Sidebar/>
            <MuiThemeProvider>
                <div style={{display: 'flex', paddingTop: 60}}>
                    <div style={{flexGrow: 0.3}} >
                        <UserList />
                    </div>
                    <EmployeeCalendar/>
                    <ActiveSchedule/>
                </div>
            </MuiThemeProvider>
            <Logo/>
        </div>
    )
}

export default FullCalendar