/**
 * Created by Jeffr on 7/17/2017.
 */

import { combineReducers } from 'redux'

// import UserReducer from './reducer-users'

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
const activeReducer = (state={user:{}}, action) => {

    switch(action.type) {
        case "USER_SELECTED":
            console.log(action.user)
            return {...state, user:action.user}
        default:
            return state
    }
}

const monReducer = (state={mon:{}}, action) => {
    switch(action.type) {
        case "get_mon":
            return {...state, mon:action.mon}
        default:
            return {...state}
    }
}

const tuesReducer = (state={tues:{}}, action) => {
    switch(action.type) {
        case "get_tues":
            return {...state, tues:action.tues}
        default:
            return {...state}
    }
}

const wedReducer = (state={wed:{}}, action) => {
    switch(action.type) {
        case "get_wed":
            return {...state, wed:action.wed}
        default:
            return {...state}
    }
}

const thursReducer = (state={thurs:{}}, action) => {
    switch(action.type) {
        case "get_thurs":
            return {...state, thurs:action.thurs}
        default:
            return {...state}
    }
}

const friReducer = (state={fri:{}}, action) => {
    switch(action.type) {
        case "get_fri":
            return {...state, fri:action.fri}
        default:
            return {...state}
    }
}

const satReducer = (state={sat:{}}, action) => {
    switch(action.type) {
        case "get_sat":
            return {...state, sat:action.sat}
        default:
            return {...state}
    }
}

const sunReducer = (state={sun:{}}, action) => {
    switch(action.type) {
        case "get_sun":
            return {...state, sun:action.sun}
        default:
            return {...state}
    }
}



const Reducer = combineReducers({
    sideBarReducer, userReducer, activeReducer, monReducer, tuesReducer, wedReducer, thursReducer, friReducer, satReducer, sunReducer
})

export default Reducer