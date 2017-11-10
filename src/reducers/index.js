/**
 * Created by Jeffr on 7/17/2017.
 */

import { combineReducers } from 'redux'

// import UserReducer from './reducer-users'

// const sunReducer = (state={sun: [
//     {hour: 7, available: false, changed: false, status:true},
//     {hour: 8, available: false, changed: false, status:true},
//     {hour: 9, available: false, changed: false, status:true},
//     {hour: 10, available: false, changed: false, status:true},
//     {hour: 11, available: false, changed: false, status:true},
//     {hour: 12, available: false, changed: false, status:true},
//     {hour: 13, available: false, changed: false, status:true},
//     {hour: 14, available: false, changed: false, status:true},
//     {hour: 15, available: false, changed: false, status:true},
//     {hour: 16, available: false, changed: false, status:true},
//     {hour: 17, available: false, changed: false, status:true},
//     {hour: 18, available: false, changed: false, status:true},
//     {hour: 19, available: false, changed: false, status:true},
//     {hour: 20, available: false, changed: false, status:true},
//     {hour: 21, available: false, changed: false, status:true},
//     {hour: 22, available: false, changed: false, status:true},
//     {hour: 23, available: false, changed: false, status:true},
//     {hour: 24, available: false, changed: false, status:true}
//   ]}, action) => {
//     switch(action.type) {
//         case "CHANGEHOURU":
//             return {...state, [action.hour]:{available:action.boolean, changed:true, status:true}}
//         default:
//             return {...state}
//     }
// }


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

const monReducer = (state=[
    {hour: 7, available: true, changed: false, closed: false},
    {hour: 8, available: false, changed: false, closed: false},
    {hour: 9, available: false, changed: false, closed: false},
    {hour: 10, available: false, changed: false, closed: false},
    {hour: 11, available: false, changed: false, closed: false},
    {hour: 12, available: false, changed: false, closed: false },
    {hour: 13, available: false, changed: false, closed: false},
    {hour: 14, available: false, changed: false, closed: false},
    {hour: 15, available: false, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false },
    {hour: 17, available: false, changed: false, closed: false},
    {hour: 18, available: false, changed: false, closed: false},
    {hour: 19, available: false, changed: false, closed: false},
    {hour: 20, available: false, changed: false, closed: false},
    {hour: 21, available: false, changed: false, closed: false},
    {hour: 22, available: false, changed: false, closed: false},
    {hour: 23, available: false, changed: false, closed: false},
    {hour: 24, available: false, changed: false, closed: false}
], action) => {
    switch(action.type) {
        case "get_mon":
            return {...state, mon:action.mon}
        case "change_availability_mon":
            return {...state, mon:action.mon}
        default:
            return {...state}
    }
}

const tuesReducer = (state=[
    {hour: 7, available: false, changed: false, closed: false},
    {hour: 8, available: false, changed: false, closed: false},
    {hour: 9, available: false, changed: false, closed: false},
    {hour: 10, available: false, changed: false, closed: false},
    {hour: 11, available: false, changed: false, closed: false},
    {hour: 12, available: false, changed: false, closed: false },
    {hour: 13, available: false, changed: false, closed: false},
    {hour: 14, available: false, changed: false, closed: false},
    {hour: 15, available: false, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false },
    {hour: 17, available: false, changed: false, closed: false},
    {hour: 18, available: false, changed: false, closed: false},
    {hour: 19, available: false, changed: false, closed: false},
    {hour: 20, available: false, changed: false, closed: false},
    {hour: 21, available: false, changed: false, closed: false},
    {hour: 22, available: false, changed: false, closed: false},
    {hour: 23, available: false, changed: false, closed: false},
    {hour: 24, available: false, changed: false, closed: false}
], action) => {
    switch(action.type) {
        case "get_tues":
            return {...state, tues:action.tues}
        case "change_availability_tues":
            return {...state, tues:action.tues}
        default:
            return {...state}
    }
}

const wedReducer = (state=[
    {hour: 7, available: false, changed: false, closed: false},
    {hour: 8, available: false, changed: false, closed: false},
    {hour: 9, available: false, changed: false, closed: false},
    {hour: 10, available: false, changed: false, closed: false},
    {hour: 11, available: false, changed: false, closed: false},
    {hour: 12, available: false, changed: false, closed: false },
    {hour: 13, available: false, changed: false, closed: false},
    {hour: 14, available: false, changed: false, closed: false},
    {hour: 15, available: false, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false },
    {hour: 17, available: false, changed: false, closed: false},
    {hour: 18, available: false, changed: false, closed: false},
    {hour: 19, available: false, changed: false, closed: false},
    {hour: 20, available: false, changed: false, closed: false},
    {hour: 21, available: false, changed: false, closed: false},
    {hour: 22, available: false, changed: false, closed: false},
    {hour: 23, available: false, changed: false, closed: false},
    {hour: 24, available: false, changed: false, closed: false}
], action) => {
    switch(action.type) {
        case "get_wed":
            return {...state, wed:action.wed}
        case "change_availability_wed":
            return {...state, wed:action.wed}
        default:
            return {...state}
    }
}

const thursReducer = (state=[
    {hour: 7, available: false, changed: false, closed: false},
    {hour: 8, available: false, changed: false, closed: false},
    {hour: 9, available: false, changed: false, closed: false},
    {hour: 10, available: false, changed: false, closed: false},
    {hour: 11, available: false, changed: false, closed: false},
    {hour: 12, available: false, changed: false, closed: false },
    {hour: 13, available: false, changed: false, closed: false},
    {hour: 14, available: false, changed: false, closed: false},
    {hour: 15, available: false, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false },
    {hour: 17, available: false, changed: false, closed: false},
    {hour: 18, available: false, changed: false, closed: false},
    {hour: 19, available: false, changed: false, closed: false},
    {hour: 20, available: false, changed: false, closed: false},
    {hour: 21, available: false, changed: false, closed: false},
    {hour: 22, available: false, changed: false, closed: false},
    {hour: 23, available: false, changed: false, closed: false},
    {hour: 24, available: false, changed: false, closed: false}
], action) => {
    switch(action.type) {
        case "get_thurs":
            return {...state, thurs:action.thurs}
        case "change_availability_thurs":
            return {...state, thurs:action.thurs}

        default:
            return {...state}
    }
}

const friReducer = (state=[
    {hour: 7, available: false, changed: false, closed: false},
    {hour: 8, available: false, changed: false, closed: false},
    {hour: 9, available: false, changed: false, closed: false},
    {hour: 10, available: false, changed: false, closed: false},
    {hour: 11, available: false, changed: false, closed: false},
    {hour: 12, available: false, changed: false, closed: false },
    {hour: 13, available: false, changed: false, closed: false},
    {hour: 14, available: false, changed: false, closed: false},
    {hour: 15, available: false, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false },
    {hour: 17, available: false, changed: false, closed: true},
    {hour: 18, available: false, changed: false, closed: true},
    {hour: 19, available: false, changed: false, closed: true},
    {hour: 20, available: false, changed: false, closed: true},
    {hour: 21, available: false, changed: false, closed: true},
    {hour: 22, available: false, changed: false, closed: true},
    {hour: 23, available: false, changed: false, closed: true},
    {hour: 24, available: false, changed: false, closed: true}
], action) => {
    switch(action.type) {
        case "get_fri":
            return {...state, fri:action.fri}
        case "change_availability_fri":
            return {...state, fri:action.fri}
        default:
            return {...state}
    }
}

const satReducer = (state=[
    {hour: 7, available: false, changed: false, closed: true},
    {hour: 8, available: false, changed: false, closed: true},
    {hour: 9, available: false, changed: false, closed: true},
    {hour: 10, available: false, changed: false, closed: false},
    {hour: 11, available: false, changed: false, closed: false},
    {hour: 12, available: false, changed: false, closed: false },
    {hour: 13, available: false, changed: false, closed: false},
    {hour: 14, available: false, changed: false, closed: false},
    {hour: 15, available: false, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false },
    {hour: 17, available: false, changed: false, closed: true},
    {hour: 18, available: false, changed: false, closed: true},
    {hour: 19, available: false, changed: false, closed: true},
    {hour: 20, available: false, changed: false, closed: true},
    {hour: 21, available: false, changed: false, closed: true},
    {hour: 22, available: false, changed: false, closed: true},
    {hour: 23, available: false, changed: false, closed: true},
    {hour: 24, available: false, changed: false, closed: true}
    ], action) => {
    switch(action.type) {
        case "get_sat":
            return {...state, sat:action.sat}
        case "change_availability_sat":
            return {...state, sat:action.sat}
        default:
            return {...state}
    }
}
const sunReducer = (state=[
    {hour: 7, available: false, changed: false, closed: true},
    {hour: 8, available: false, changed: false, closed: true},
    {hour: 9, available: false, changed: false, closed: true},
    {hour: 10, available: false, changed: false, closed: true},
    {hour: 11, available: false, changed: false, closed: true},
    {hour: 12, available: false, changed: false, closed: true },
    {hour: 13, available: false, changed: false, closed: true},
    {hour: 14, available: false, changed: false, closed: false},
    {hour: 15, available: false, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false },
    {hour: 17, available: false, changed: false, closed: false},
    {hour: 18, available: false, changed: false, closed: false},
    {hour: 19, available: false, changed: false, closed: false},
    {hour: 20, available: false, changed: false, closed: false},
    {hour: 21, available: false, changed: false, closed: false},
    {hour: 22, available: false, changed: false, closed: false},
    {hour: 23, available: false, changed: false, closed: false},
    {hour: 24, available: false, changed: false, closed: false}
], action) => {
    switch(action.type) {
        case "get_sun":
            return {...state, sun:action.sun}
        case "change_availability_sun":
            return {...state, sun:action.sun}
        default:
            return {...state}
    }
}



const Reducer = combineReducers({
    sideBarReducer, userReducer, activeReducer, monReducer, tuesReducer, wedReducer, thursReducer, friReducer, satReducer, sunReducer
})

export default Reducer
