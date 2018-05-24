/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CalendarMonth from './calendar-month'
import CalModal from './calendar-modal'
import FlatButton from 'material-ui/FlatButton';
import { initializeStates } from '../../actions/userActions';
import eCalReducer from '../../reducers/eCalReducer';
import Sidebar from '../sidebar'
import Logo from '../chaus-logo'
import ColorLegend from '../color-legend';

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
        <div>
            <Sidebar/>
            <MuiThemeProvider>
                <div style={{display: 'flex', paddingTop: 60}}>
                    <div style={{flexGrow: 0.3}} >
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
