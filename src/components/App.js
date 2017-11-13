/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import Sidebar from '../containers/sidebar'
import EmployeeCalendar from '../containers/employee-calendar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import UserList from '../containers/user-list'
import ChangeButton from '../containers/changes-button'

const App = () => (
    <div>
        <Sidebar/>
        <MuiThemeProvider>
          <div>
            <UserList />
            <EmployeeCalendar/>
            <ChangeButton/>
          </div>
        </MuiThemeProvider>
    </div>
)

export default App
