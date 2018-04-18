/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CalendarMonth from './calendar-month'
import CalModal from './calendar-modal'
import FlatButton from 'material-ui/FlatButton';

const MFullCalendar = () => {
    return (
        <MuiThemeProvider>
            <div style={{display: 'flex', paddingTop: 60}}>
                <div style={{flexGrow: 0.3}} >
                </div>
                <CalendarMonth/>
                <div style={{position: 'absolute', right: 60, top: 105}}>
                    <div>
                        <FlatButton style={{backgroundColor: "#607d8b", height: 15, minWidth: 15, marginRight: 5}}/>
                       = Empty
                    </div>
                    <div>
                        <FlatButton style={{backgroundColor: "#4caf50", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                       = Has room 
                    </div>
                    <div>
                        <FlatButton style={{backgroundColor: "#ffc107", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                       = Full shift 
                    </div>
                    <div>
                        <FlatButton style={{backgroundColor: "#f44336", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                       = Overscheduled 
                    </div>
                </div>
                <CalModal/>
            </div>
        </MuiThemeProvider>
    )
}

export default MFullCalendar