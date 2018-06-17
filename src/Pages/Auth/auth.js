import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import EmployeeCalendar from '../eCalendar/employee-calendar'
import UserList from '../eCalendar/user-list'
import ActiveSchedule from '../eCalendar/active-user-schedule'
// Actions
import { sendTicket } from '../../actions/authActions'
import { initializeStates } from '../../actions/userActions';

// Styles
const divStyle = {
  backgroundColor: '#5e6c8a',
  height: '100vh'
}

const Auth = ({search, loggedIn, sendTicket, redirectUrl, users}) => {
  // Call action which sends ticket to backend
  sendTicket(search);
  // Check whether user is logged in
  console.log("checking if user is logged in...state: " + loggedIn)
  if (loggedIn == true) {
    console.log("logged in... Initializing states..")
    console.log("redirecting...")
    redirectUrl()
    // initializeStates()
    // console.log("INITIALIZED USERS: " + users)
  }
  return (
    <MuiThemeProvider>
      <div style={divStyle}>
      </div>
    </MuiThemeProvider>
  )
}

/**
 * Connect method which calls 
 */
export default connect (
    (state, ownProps) => {
      return {
        search: ownProps.location.search,
        loggedIn: state.auth.authReducer.authenticated,
        users: state.eCal.userReducer.users
      }
    },
    (dispatch, ownProps) => {
        return {
          sendTicket: (search) => dispatch(sendTicket(search)),
          redirectUrl: () => ownProps.history.push('/mcal'),
          initialize_states: () => dispatch(initializeStates())
        }
    }
)(Auth)
