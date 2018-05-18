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
        case "USER_HOUR_UPDATE":
            // Find our user by id
            let usersCopy = state.users
            let userIndex = usersCopy.findIndex((user) => {
                return user._id == action.user._id
            });
            // Replace in copied array
            usersCopy.splice(userIndex, 1, action.user)
            return {...state, users: usersCopy}
        default:
            return state
    }
}



const Reducer = combineReducers({
    eCal, mCal, auth, pageReducer, userReducer, routerReducer
})


export default Reducer
