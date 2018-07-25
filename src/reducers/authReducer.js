import { combineReducers } from "redux";
/*
Created by Will on 4/8/18
*/

/**
 * Reducer that keeps track of different states related to authorization
 * @param {*} state 
 *      loggedInUser: User currently logged in
 *          { id, netid, firstName, lastName, role }
 *      authenticated: Whether or not user is authenticated
 *      fetching: Whether or not we sent the ticket to backend
 *      failed: If ticket is declined from backend
 * @param {*} action 
 */
const authReducer = (state={
    loggedInUser: {}, authenticated: false, fetching: false
}, action) => {
    switch(action.type) {
        case "TICKET_APPROVED":
            console.log("Ticket approved");
            // Store token in local storage
            localStorage.setItem('token', action.token);
            // Set loggedInUser
            return {...state, loggedInUser: action.user};
        case "TICKET_REJECTED":
            // TODO: Add visual cues to indicate failure
            console.log("Ticket failed");
            return {...state};
        case "AUTHENTICATION_PROCESSING":
            return {...state, fetching: true};
        case "AUTHENTICATION_SUCCEEDED":
            return {...state, loggedInUser: action.user, fetching: false};
        case "AUTHENTICATION_FAILED":
            // Strip token from localStorage since it has expired or been corrupted
            localStorage.removeItem('token');
            return {...state, fetching: false};
        default:
            return {...state};
    }
}

/**
 * Reducer that keeps track of different states related to current user's role
 * @param {*} state 
 *      role: String containing one of three values: 'non-user', 'user', 'admin'
 *      activeUser: String containing netid of logged-in user
 * @param {*} action 
 */
const activeUserReducer = (state={role: 'non-user', activeUser: ''}, action) => {
    switch(action.type) {
        case "SET_USER_ROLE":
            return {...state, role: action.role}
        case "SET_USER_NETID":
            return {...state, activeUser: action.netid}
        default:
            return state
    }
}

export default combineReducers({
    authReducer, activeUserReducer
});
