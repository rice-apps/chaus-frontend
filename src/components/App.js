/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import UserList from '../containers/user-list'
import Day from '../containers/day'
import Calendar from '../containers/calendar'
import Sidebar from '../containers/sidebar'
import CalendarDay from '../containers/calendar-day'
import EmployeeCalendar from '../containers/employee-calendar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const App = () => (
    <div>
        <Sidebar/>
        <MuiThemeProvider>
          <div>
            <EmployeeCalendar/>
          </div>
        </MuiThemeProvider>
    </div>
)

export default App
