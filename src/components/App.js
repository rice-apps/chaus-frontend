/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import Sidebar from '../containers/sidebar'
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
