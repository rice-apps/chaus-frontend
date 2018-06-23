/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CalendarMonth from './calendar-month'
import CalModal from './calendar-modal'
<<<<<<< HEAD
import Button from 'material-ui/Button';
=======
import FlatButton from 'material-ui/FlatButton';
import { initializeStates } from '../../actions/userActions';
import eCalReducer from '../../reducers/eCalReducer';
import Sidebar from '../sidebar'
import Logo from '../chaus-logo'
import ColorLegend from '../color-legend';
>>>>>>> security

const legend = {
    "Empty": "#5fa55a",
    "Has Room": "#f6d51f",
    "Full Shift": "#fa8925",
    "Overbooked": "#fa5457"
}


const MFullCalendar = ({initialize_states, netids}) => {

    // initialize_states();
    // console.log("PLEASE PRINT Out ALL USER OBJECTS: " + netids)
    return (
<<<<<<< HEAD
        <MuiThemeProvider>
            <div style={{display: 'flex', paddingTop: 60}}>
                <div style={{flexGrow: 0.3}} >
                </div>
                <CalendarMonth/>
                <div style={{position: 'absolute', right: 60, top: 105}}>
                    <div>
                        <Button variant="Flat" style={{backgroundColor: "#607d8b", height: 15, minWidth: 15, marginRight: 5}}/>
                       = Empty
                    </div>
                    <div>
                        <Button variant="Flat" style={{backgroundColor: "#4caf50", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                       = Has room
                    </div>
                    <div>
                        <Button variant="Flat" style={{backgroundColor: "#ffc107", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                       = Full shift
                    </div>
                    <div>
                        <Button variant="Flat" style={{backgroundColor: "#f44336", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                       = Overscheduled
=======
        <div>
            <Sidebar/>
            <MuiThemeProvider>
                <div style={{display: 'flex', paddingTop: 60}}>
                    <div style={{flexGrow: 0.3}} >
>>>>>>> security
                    </div>
                    <CalendarMonth/>
                    <ColorLegend legend={legend} />
                    <CalModal/>
                </div>
            </MuiThemeProvider>
            <Logo/>
        </div>
    )
}

<<<<<<< HEAD
export default MFullCalendar
=======



export default connect (
    (state, ownProps) => {
      return {
        netids: state.eCal.userReducer.netids
      }
    },
    (dispatch, ownProps) => {
        return {
          initialize_states: () => dispatch(initializeStates())
        }
    }
)(MFullCalendar)
>>>>>>> security
