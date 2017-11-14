/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import EmployeeCalendar from '../containers/employee-calendar'
import UserList from '../containers/user-list'
import ChangeButton from '../containers/changes-button'

const FullCalendar = () => {
    return (
        <MuiThemeProvider>
            <div style={{display: 'flex', marginTop: 10}}>
                <UserList />
                <EmployeeCalendar/>
                <ChangeButton/>
            </div>
        </MuiThemeProvider>
    )
}

export default FullCalendar