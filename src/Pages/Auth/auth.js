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

class Auth extends Component {
  constructor(props) {
    super(props);
    // On init, send ticket to backend
    var { sendTicket, search } = props;
    sendTicket(search);
  }

  render() {
    var { loggedInUser, redirectUrl } = this.props;
    if (loggedInUser) {
      // Get user role
      var { role } = loggedInUser;
      // Redirect based on role
      redirectUrl(role);
    }
    return (
      <div>
        Authenticating...
      </div>
    )
  }
}

/**
 * Connect method which calls 
 */
export default connect (
    (state, ownProps) => {
      return {
        search: ownProps.location.search,
        loggedInUser: state.auth.authReducer.loggedInUser,
        users: state.eCal.userReducer.users
      }
    },
    (dispatch, ownProps) => {
        return {
          sendTicket: (search) => dispatch(sendTicket(search)),
          redirectUrl: (role) => role == 'Admin' ? 
          ownProps.history.push('/master') : ownProps.history.push('/member'),
          initialize_states: () => dispatch(initializeStates())
        }
    }
)(Auth)
