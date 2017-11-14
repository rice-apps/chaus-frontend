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

const changesReducer = (state={changes_saved: false}, action) => {
    switch(action.type) {
      case "CHANGES_SAVED":
        console.log(action.changes_saved)
        return {...state, changes_saved: action.changes_saved}
      default:
        return state
    }
}

const monReducer = (state={mon:[
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
]}, action) => {
    switch(action.type) {
        case "CHANGEM":
            return {...state, mon:action.state}
        case "CHANGE_HOUR_M":
            let shift_index = 0
            var newShift = {}
            state.mon.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  console.log(action.available)
                  shift_index = shift.hour - 7
                  // newShift = shift: {...shift, available: action.available, changed: !action.changed}}}
                }
              }
            )
            let mon_array = []
            state.mon.map((shift) => mon_array.push({...shift}))
            mon_array[shift_index] = {available: action.available, hour: shift_index + 7, changed: !action.changed}
            console.log(mon_array)
            return {...state, mon: mon_array}
            // return {...state, mon[action.hour-7]:{...mon[action.hour-7], available: action.available, changed: action.changed}}
        default:
            return {...state}
    }
}

const tuesReducer = (state={tues:[
    {hour: 7, available: true, changed: false, closed: false},
    {hour: 8, available: true, changed: false, closed: false},
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
]}, action) => {
    switch(action.type) {
        case "CHANGET":
            return {...state, tues:action.state}
        case "CHANGE_HOUR_T":
            let shift_index = 0
            var newShift = {}
            state.tues.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  console.log(action.available)
                  shift_index = shift.hour - 7
                  // newShift = shift: {...shift, available: action.available, changed: !action.changed}}}
                }
              }
            )
            let tues_array = []
            state.tues.map((shift) => tues_array.push({...shift}))
            tues_array[shift_index] = {available: action.available, hour: shift_index + 7, changed: !action.changed}
            console.log(tues_array)
            return {...state, tues: tues_array}
        default:
            return {...state}
    }
}

const wedReducer = (state={wed:[
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
]}, action) => {
    switch(action.type) {
        case "CHANGEW":
            return {...state, wed:action.state}
        case "CHANGE_HOUR_W":
            let shift_index = 0
            var newShift = {}
            state.wed.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  console.log(action.available)
                  shift_index = shift.hour - 7
                  // newShift = shift: {...shift, available: action.available, changed: !action.changed}}}
                }
              }
            )
            let wed_array = []
            state.wed.map((shift) => wed_array.push({...shift}))
            wed_array[shift_index] = {available: action.available, hour: shift_index + 7, changed: !action.changed}
            console.log(wed_array)
            return {...state, wed: wed_array}
        default:
            return {...state}
    }
}

const thursReducer = (state={thurs:[
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
]}, action) => {
    switch(action.type) {
        case "CHANGEHOURR":
            return {...state, thurs:action.thurs}
        case "CHANGE_HOUR_R":
            let shift_index = 0
            var newShift = {}
            state.thurs.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  console.log(action.available)
                  shift_index = shift.hour - 7
                  // newShift = shift: {...shift, available: action.available, changed: !action.changed}}}
                }
              }
            )
            let thurs_array = []
            state.thurs.map((shift) => thurs_array.push({...shift}))
            thurs_array[shift_index] = {available: action.available, hour: shift_index + 7, changed: !action.changed}
            console.log(thurs_array)
            return {...state, thurs: thurs_array}
        case "change_availability_thurs":
            return {...state, thurs:action.thurs}

        default:
            return {...state}
    }
}

const friReducer = (state={fri:[
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
]}, action) => {
    switch(action.type) {
        case "CHANGEHOURF":
            return {...state, fri:action.fri}
        case "CHANGE_HOUR_F":
            let shift_index = 0
            var newShift = {}
            state.fri.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  console.log(action.available)
                  shift_index = shift.hour - 7
                  // newShift = shift: {...shift, available: action.available, changed: !action.changed}}}
                }
              }
            )
            let fri_array = []
            state.fri.map((shift) => fri_array.push({...shift}))
            fri_array[shift_index] = {available: action.available, hour: shift_index + 7, changed: !action.changed}
            console.log(fri_array)
            return {...state, fri: fri_array}
        case "change_availability_fri":
            return {...state, fri:action.fri}
        default:
            return {...state}
    }
}

const satReducer = (state={sat:[
    {hour: 7, available: false, changed: false, closed: true},
    {hour: 8, available: false, changed: false, closed: true},
    {hour: 9, available: false, changed: false, closed: true},
    {hour: 10, available: false, changed: false, closed: false},
    {hour: 11, available: false, changed: false, closed: false},
    {hour: 12, available: false, changed: false, closed: false },
    {hour: 13, available: false, changed: false, closed: false},
    {hour: 14, available: false, changed: false, closed: false},
    {hour: 15, available: true, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false },
    {hour: 17, available: false, changed: false, closed: true},
    {hour: 18, available: false, changed: false, closed: true},
    {hour: 19, available: false, changed: false, closed: true},
    {hour: 20, available: false, changed: false, closed: true},
    {hour: 21, available: false, changed: false, closed: true},
    {hour: 22, available: false, changed: false, closed: true},
    {hour: 23, available: false, changed: false, closed: true},
    {hour: 24, available: false, changed: false, closed: true}
    ]}, action) => {
    switch(action.type) {
        case "CHANGEHOURS":
            return {...state, sat:action.sat}
        case "CHANGE_HOUR_S":
            let shift_index = 0
            var newShift = {}
            state.sat.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  console.log(action.available)
                  shift_index = shift.hour - 7
                  // newShift = shift: {...shift, available: action.available, changed: !action.changed}}}
                }
              }
            )
            let sat_array = []
            state.sat.map((shift) => sat_array.push({...shift}))
            sat_array[shift_index] = {available: action.available, hour: shift_index + 7, changed: !action.changed}
            console.log(sat_array)
            return {...state, sat: sat_array}
        case "change_availability_sat":
            return {...state, sat:action.sat}
        default:
            return {...state}
    }
}
const sunReducer = (state={sun:[
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
]}, action) => {
    switch(action.type) {
        case "CHANGEHOURU":
            return {...state, sun:action.sun, hour: action.h, boolean: action.boolean}
        case "CHANGE_HOUR_U":
            let shift_index = 0
            var newShift = {}
            state.sun.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  console.log(action.available)
                  shift_index = shift.hour - 7
                  // newShift = shift: {...shift, available: action.available, changed: !action.changed}}}
                }
              }
            )
            let sun_array = []
            state.sun.map((shift) => sun_array.push({...shift}))
            sun_array[shift_index] = {available: action.available, hour: shift_index + 7, changed: !action.changed}
            console.log(sun_array)
            return {...state, sun: sun_array}
        case "change_availability_sun":
            return {...state, sun:action.sun}
        default:
            return {...state}
    }
}



const Reducer = combineReducers({
    sideBarReducer, userReducer, activeReducer, monReducer, tuesReducer, wedReducer, thursReducer, friReducer, satReducer, sunReducer
})

export const WReducer = combineReducers({
    monReducer, tuesReducer, wedReducer, thursReducer, friReducer, satReducer, sunReducer
})

export default Reducer
