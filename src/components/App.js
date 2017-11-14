/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import Sidebar from '../containers/sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FullCalendar from '../containers/full-calendar'


const App = () => (
    <div>
        <Sidebar/>
        <MuiThemeProvider>
            <FullCalendar/>
        </MuiThemeProvider>
    </div>
)

export default App
