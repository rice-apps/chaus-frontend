import { resource } from './masterActions'

export const sendTicket = (search) => {
  var equalSignIndex = search.indexOf('=') + 1;
  var ticket = search.substring(equalSignIndex,);

  console.log("Parsed Ticket: " + ticket);
    return (dispatch) => {
      resource('GET', 'auth'+'?ticket='+ticket).then(
        (result) => {

          if (result) {
            dispatch({
              type: "TICKET_APPROVED",
              netid: result.user.username,
              token: result.user.token
            })
          }
          else {
            dispatch({
              type: "TICKET_DECLINED"
            })
          }
        }

      )

    }
}

/**
 * THIS ACTION IS VOID!!!!!
 * Sends ticket to backend and checks if user is approved
 * If it is approved/declined, change states on auth reducer accordingly
 * @param {*} ticket 
 */
export const ticketToBackend = (ticket) => {
  console.log("this is the ticket:" + ticket)
    return (dispatch) => {
      resource('GET', 'auth'+'?ticket='+ticket).then(
        (result) => {
          console.log("THIS IS THE RESULTS: " + result)
          if (result) {
            console.log("ticket is approved!!!")
            dispatch({
              type: "TICKET_APPROVED",
              netid: result.user.username,
              token: result.user.token
            })
          }
          else {
            console.log("ticket is declined!")
            dispatch({
              type: "TICKET_DECLINED"
            })
          }
          console.log("finished.")
        }

      )
    }
}
