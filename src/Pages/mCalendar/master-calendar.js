/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CalendarMonth from './calendar-month'
import CalModal from './calendar-modal'

const MFullCalendar = () => {
    return (
        <MuiThemeProvider>
            <div style={{display: 'flex', paddingTop: 60}}>
                <div style={{flexGrow: 0.3}} >
                </div>
                <CalendarMonth/>
                <CalModal/>
            </div>
        </MuiThemeProvider>
    )
}

export default MFullCalendar