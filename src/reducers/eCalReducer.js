/**
 * Created by Will on 2/17/2018.
 */
import { combineReducers } from 'redux'

const scheduleReducer = (state={schedule:{M:[], T:[], W:[], R:[], F:[], S:[], U:[]}}, action) => {
    switch(action.type) {
        case "GET_AVAILABILITY":
            new_schedule = {
              M: action.schedule[0],
              T: action.schedule[1],
              W: action.schedule[2],
              R: action.schedule[3],
              F: action.schedule[4],
              S: action.schedule[5],
              U: action.schedule[6],
            }
            return {...state, schedule:new_schedule}
        case "GET_SCHEDULED":
            return {...state, schedule:action.schedule}
        default:
            return state
    }
}

const sideBarReducer = (state={toggle:false}, action) => {
    switch(action.type) {
        case "TOGGLEBURGER":
            return {...state, toggle:action.toggle}
        default:
            return state
    }

}


const userReducer = (state={netids:[]}, action) => {
    switch(action.type) {
        case "GET_NETIDS":
            return {...state, netids:action.netids}
        default:
            return state
    }
}
const activeReducer = (state={user:{}, schedule:{M:[], T:[], W:[], R:[], F:[], S:[], U:[]}}, action) => {

    switch(action.type) {
        case "USER_SELECTED":
            console.log(action.user)
            return {...state, user:action.user}
        case "GENERATE":
            return {...state, schedule:action.schedule}
        default:
            return state
    }
}

export default combineReducers({
    sideBarReducer, userReducer, activeReducer, scheduleReducer
})