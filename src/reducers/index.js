/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'
import mCal from './mCalReducer';
import eCal from './eCalReducer';
import auth from './authReducer';
import { routerReducer } from 'react-router-redux'



const pageReducer = (state={location:"mCalendar"}, action) => {
    switch(action.type) {
        case "CHANGELOCATION":
            return {...state, location:action.location}
        default:
            return state
    }
}


const userReducer = (state={users: []}, action) => {
    switch(action.type) {
        // case "GET_NETIDS":
        //     console.log(action.netids)
        //     return {...state, netids:action.netids}
        case "GET_USERS":
            let netids = []
            for (var user in action.users) {
                netids.push(action.users[user].netid)
            }
            return {...state, netids:netids, users: action.users}
        default:
            return state
    }
}



const Reducer = combineReducers({
    eCal, mCal, auth, pageReducer, routerReducer
})


export default Reducer
