/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import EmployeeCalendar from '../containers/employee-calendar'
import UserList from '../containers/user-list'

const FullCalendar = () => {
    return (
        <MuiThemeProvider>
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 0.3}} >
                    <UserList />
                </div>
                <EmployeeCalendar/>
            </div>
        </MuiThemeProvider>
    )
}

export default FullCalendar