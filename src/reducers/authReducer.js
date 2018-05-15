/*

Created by Will on 4/8/18

*/

/**
 * Reducer that keeps track of different states related to authorization
 * @param {*} state 
 *      authenticated: Whether or not user is authenticated
 *      fetching: Whether or not we sent the ticket to backend
 *      failed: If ticket is declined from backend
 * @param {*} action 
 */
const auth = (state={authenticated:false, fetching: false, failed: false}, action) => {
    switch(action.type) {
        case "TICKET_SENT":
            return {...state, fetching: true}
        case "TICKET_APPROVED":
            console.log("Ticket approved");
            // Store token in local storage
            localStorage.setItem('token', action.token);
            // Store netid in local storage
            localStorage.setItem('netid', action.netid);
            return {...state, fetching: false, authenticated: true}
        case "TICKET_DECLINED":
            console.log("Ticket declined");
            return {...state, fetching: false, failed: true}
        default:
            return state
    }

}

export default auth;
