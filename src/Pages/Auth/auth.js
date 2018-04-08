import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import EmployeeCalendar from '../eCalendar/employee-calendar'
import UserList from '../eCalendar/user-list'
import ActiveSchedule from '../eCalendar/active-user-schedule'
// Actions
import { sendTicket } from '../../actions/authActions'

const Auth = ({search, sendTicket}) => {
  // Call action which sends ticket to backend
  sendTicket(search);
  return (
    <MuiThemeProvider>
      <div>
        <h1>Hello</h1>
      </div>
    </MuiThemeProvider>
  )
}

export default connect (
    (state, ownProps) => {
      return {
        search: ownProps.location.search
      }
    },
    (dispatch) => {
        return {
          sendTicket: (search) => dispatch(sendTicket(search))
        }
    }
)(Auth)
