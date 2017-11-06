/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import Sidebar from '../containers/sidebar'
import EmployeeCalendar from '../containers/employee-calendar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import UserList from '../containers/user-list'

const App = () => (
    <div>
        <Sidebar/>
        <MuiThemeProvider>
          <div>
            <UserList />
            <EmployeeCalendar/>
          </div>
        </MuiThemeProvider>
    </div>
)

export default App
