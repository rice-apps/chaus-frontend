import { resource } from './masterActions'

export const sendTicket = (search) => {
    return (dispatch) => {
      // Parse search url
      // Find index of equal Sign
      var equalSignIndex = search.indexOf('=') + 1;
      var ticket = search.substring(equalSignIndex,);
      console.log(ticket);
      // Send ticket to backend
      dispatch(ticketToBackend(ticket));
      dispatch({
        type: "TICKET_SENT"
      })
    }
}

export const ticketToBackend = (ticket) => {
    return (dispatch) => {
      resource('GET', 'auth', {"ticket": ticket}).then(
        (err, result) => {
          console.log("Hit");
          if (err) {
            console.log("Error");
            dispatch({
              type: "TICKET_DECLINED"
            })
          }
          else {
            dispatch({
              type: "TICKET_APPROVED",
              netid: result.user.username,
              token: result.user.token
            })
          }
        }
      )
    }
}
