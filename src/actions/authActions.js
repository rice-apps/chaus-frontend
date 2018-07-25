import { resource } from './masterActions'
import { client } from '../index';
// GraphQL 
import { InitialAuthentication } from '../graphql/queries/auth.graphql';

/**
 * Function: Parses URL to get ticket returned by IDP, 
 * sends to backend, checks if ticket is still valid. If so,
 * gets user data
 * @param {*} search: String
 *    Ex: "?ticket=ST-1532455356829-SKjhoBUFUqSquWAMuODVqPisD"
 */
export const sendTicket = (search) => {
  var equalSignIndex = search.indexOf('=') + 1;
  var ticket = search.substring(equalSignIndex,);
    return async (dispatch) => {
      var response = await client.mutate({
        mutation: InitialAuthentication,
        variables: {
          ticket
        }
      });
      var authPayload = response.data.initialAuthentication;
      if (authPayload.user && authPayload.token) {
        dispatch({
          type: "TICKET_APPROVED",
          user: authPayload.user,
          token: authPayload.token
        });
      }
      else {
        dispatch({
          type: "TICKET_REJECTED"
        })
      }
    }
}

/**
 * TODO: Remove this action (ensure all things dependent on it change)
 */
export const getUserInfo = () => {
  // Get Token from localStorage
  let token = localStorage.getItem('token');
  return (dispatch) => {
    // Call backend method for decoding & providing role
    resource('GET', 'activeUser/'+token).then(
      (userInfo) => {
        dispatch({
          type: "SET_USER_ROLE",
          role: userInfo.role
        })
        dispatch({
          type: "SET_USER_NETID",
          netid: userInfo.netid
        })
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }
}