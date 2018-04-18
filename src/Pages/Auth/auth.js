import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import EmployeeCalendar from '../eCalendar/employee-calendar'
import UserList from '../eCalendar/user-list'
import ActiveSchedule from '../eCalendar/active-user-schedule'
// Actions
import { sendTicket } from '../../actions/authActions'

// Styles
const divStyle = {
  backgroundColor: '#5e6c8a',
  height: '100vh'
}

const Auth = ({search, loggedIn, sendTicket, redirectUrl}) => {
  // Call action which sends ticket to backend
  sendTicket(search);
  // Check whether user is logged in
  if (loggedIn == true) {
    redirectUrl()
  }
  return (
    <MuiThemeProvider>
      <div style={divStyle}>
      </div>
    </MuiThemeProvider>
  )
}

export default connect (
    (state, ownProps) => {
      return {
        search: ownProps.location.search,
        loggedIn: state.auth.authenticated
      }
    },
    (dispatch, ownProps) => {
        return {
          sendTicket: (search) => dispatch(sendTicket(search)),
          redirectUrl: () => ownProps.history.push('/mcal')
        }
    }
)(Auth)
