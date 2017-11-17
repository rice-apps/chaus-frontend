/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'


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

const monReducer = (state={mon:[
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
        case "CHANGET":
            return {...state, tues:action.state}
        case "CHANGE_HOUR_T":
            let arr = []
            state.tues.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, tues: arr}
        default:
            return {...state}
    }
}

const wedReducer = (state={wed:[
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
        case "CHANGEW":
            return {...state, wed:action.state}
        case "CHANGE_HOUR_W":
            let arr = []
            state.wed.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, wed: arr}
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
        case "CHANGER":
            return {...state, thurs:action.state}
        case "CHANGE_HOUR_R":
            let arr = []
            state.thurs.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, thurs: arr}
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
        case "CHANGEF":
            return {...state, fri:action.state}
        case "CHANGE_HOUR_F":
            let arr = []
            state.fri.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, fri: arr}
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
    {hour: 15, available: false, changed: false, closed: false},
    {hour: 16, available: false, changed: false, closed: false},
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
        case "CHANGES":
            return {...state, sat:action.state}
        case "CHANGE_HOUR_S":
            let arr = []
            state.sat.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, sat:arr}
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
        case "CHANGEU":
            return {...state, sun:action.state}
        case "CHANGE_HOUR_U":
            let arr = []
            state.sun.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, sun: arr}
        case "change_availability_sun":
            return {...state, sun:action.sun}
        default:
            return {...state}
    }
}




export default combineReducers({
    sideBarReducer, userReducer, activeReducer, monReducer, tuesReducer, wedReducer, thursReducer, friReducer, satReducer, sunReducer
})
