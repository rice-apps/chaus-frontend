import React, {Component} from 'react'
import {connect} from 'react-redux'
// Actions
import { sendTicket } from '../../actions/authActions'

class Auth extends Component {
  constructor(props) {
    super(props);
    // On init, send ticket to backend
    var { sendTicket, search } = props;
    sendTicket(search);
  }

  render() {
    var { loggedInUser, redirectUrl } = this.props;
    // Do not redirect until loggedInUser appears (i.e. authenticated)
    if (loggedInUser.role) {
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
          ownProps.history.push('/mcal') : ownProps.history.push('/ecal'),
        }
    }
)(Auth)
