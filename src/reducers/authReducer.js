/*

Created by Will on 4/8/18

*/

const auth = (state={authenticated:false, fetching: false, failed: false}, action) => {
    switch(action.type) {
        case "TICKET_SENT":
            return {...state, fetching: true}
        case "TICKET_APPROVED":
            // Store token in local storage
            localStorage.setItem('token', action.token);
            // Store netid in local storage
            localStorage.setItem('netid', action.netid);
            return {...state, fetching: false, authenticated: true}
        case "TICKET_DECLINED":
            return {...state, fetching: false, failed: true}
        default:
            return state
    }

}

export default auth;
