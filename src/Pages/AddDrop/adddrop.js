import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
// Actions
import {add_user, remove_user} from '../../actions/userActions'

const AddDrop = ({users, netids, add_user, remove_user}) => {
  console.log(users);
  console.log(netids);
  return (
    <MuiThemeProvider>
      <div>
        <h1>Hello</h1>
        {netids.map((netid) => {
          console.log(netid);
          return (
            <h1 key={netid}>Hi: {netid}</h1>
          )
        })}
      </div>
    </MuiThemeProvider>
  )
}

export default connect (
    (state, ownProps) => {
      return {
          users: state.eCal.userReducer.users,
          netids: state.eCal.userReducer.netids
      }
    },
    (dispatch, ownProps) => {
        return {
          add_user: (netid, firstName, lastName, idealHours, maxHour) => dispatch(
            add_user(netid, firstName, lastName, idealHours, maxHour)),
          remove_user: (netid) => dispatch(remove_user(netid))
        }
    }
)(AddDrop)
