/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import UserList from '../containers/user-list'
import Day from '../containers/day'
import Calendar from '../containers/calendar'
import CalendarDay from '../containers/calendar-day'
import EmployeeCalendar from '../containers/employee-calendar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
/*const App = () => (
    <div>
        <h2>Username List: </h2>
        <UserList/>
        <hr />
        <Calendar/>
        <calendarHour/>
    </div>
)
*/


const App = () => (
    <MuiThemeProvider>
      <div>
        <EmployeeCalendar/>
      </div>
    </MuiThemeProvider>
)

export default App
