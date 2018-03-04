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
    {hour: 7, available: 0, changed: false, closed: false},
    {hour: 8, available: 0, changed: false, closed: false},
    {hour: 9, available: 0, changed: false, closed: false},
    {hour: 10, available: 0, changed: false, closed: false},
    {hour: 11, available: 0, changed: false, closed: false},
    {hour: 12, available: 0, changed: false, closed: false },
    {hour: 13, available: 0, changed: false, closed: false},
    {hour: 14, available: 0, changed: false, closed: false},
    {hour: 15, available: 0, changed: false, closed: false},
    {hour: 16, available: 0, changed: false, closed: false },
    {hour: 17, available: 0, changed: false, closed: false},
    {hour: 18, available: 0, changed: false, closed: false},
    {hour: 19, available: 0, changed: false, closed: false},
    {hour: 20, available: 0, changed: false, closed: false},
    {hour: 21, available: 0, changed: false, closed: false},
    {hour: 22, available: 0, changed: false, closed: false},
    {hour: 23, available: 0, changed: false, closed: false},
    {hour: 24, available: 0, changed: false, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGEM":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.mon[i], available:action.state[i].available})
            }
            return {...state, mon:arrs}
        case "CHANGE_HOUR_M":
            let arr = []

            state.mon.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, mon: arr}
        // return {...state, mon[action.hour-7]:{...mon[action.hour-7], available: action.available, changed: action.changed}}
        default:
            return {...state}
    }
}

const tuesReducer = (state={tues:[
    {hour: 7, available: 0, changed: false, closed: false},
    {hour: 8, available: 0, changed: false, closed: false},
    {hour: 9, available: 0, changed: false, closed: false},
    {hour: 10, available: 0, changed: false, closed: false},
    {hour: 11, available: 0, changed: false, closed: false},
    {hour: 12, available: 0, changed: false, closed: false },
    {hour: 13, available: 0, changed: false, closed: false},
    {hour: 14, available: 0, changed: false, closed: false},
    {hour: 15, available: 0, changed: false, closed: false},
    {hour: 16, available: 0, changed: false, closed: false },
    {hour: 17, available: 0, changed: false, closed: false},
    {hour: 18, available: 0, changed: false, closed: false},
    {hour: 19, available: 0, changed: false, closed: false},
    {hour: 20, available: 0, changed: false, closed: false},
    {hour: 21, available: 0, changed: false, closed: false},
    {hour: 22, available: 0, changed: false, closed: false},
    {hour: 23, available: 0, changed: false, closed: false},
    {hour: 24, available: 0, changed: false, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGET":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.tues[i], available:action.state[i].available})
            }

            return {...state, tues:arrs}
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
    {hour: 7, available: 0, changed: false, closed: false},
    {hour: 8, available: 0, changed: false, closed: false},
    {hour: 9, available: 0, changed: false, closed: false},
    {hour: 10, available: 0, changed: false, closed: false},
    {hour: 11, available: 0, changed: false, closed: false},
    {hour: 12, available: 0, changed: false, closed: false },
    {hour: 13, available: 0, changed: false, closed: false},
    {hour: 14, available: 0, changed: false, closed: false},
    {hour: 15, available: 0, changed: false, closed: false},
    {hour: 16, available: 0, changed: false, closed: false },
    {hour: 17, available: 0, changed: false, closed: false},
    {hour: 18, available: 0, changed: false, closed: false},
    {hour: 19, available: 0, changed: false, closed: false},
    {hour: 20, available: 0, changed: false, closed: false},
    {hour: 21, available: 0, changed: false, closed: false},
    {hour: 22, available: 0, changed: false, closed: false},
    {hour: 23, available: 0, changed: false, closed: false},
    {hour: 24, available: 0, changed: false, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGEW":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.wed[i], available:action.state[i].available})
            }

            return {...state, wed:arrs}
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
    {hour: 7, available: 0, changed: false, closed: false},
    {hour: 8, available: 0, changed: false, closed: false},
    {hour: 9, available: 0, changed: false, closed: false},
    {hour: 10, available: 0, changed: false, closed: false},
    {hour: 11, available: 0, changed: false, closed: false},
    {hour: 12, available: 0, changed: false, closed: false },
    {hour: 13, available: 0, changed: false, closed: false},
    {hour: 14, available: 0, changed: false, closed: false},
    {hour: 15, available: 0, changed: false, closed: false},
    {hour: 16, available: 0, changed: false, closed: false },
    {hour: 17, available: 0, changed: false, closed: false},
    {hour: 18, available: 0, changed: false, closed: false},
    {hour: 19, available: 0, changed: false, closed: false},
    {hour: 20, available: 0, changed: false, closed: false},
    {hour: 21, available: 0, changed: false, closed: false},
    {hour: 22, available: 0, changed: false, closed: false},
    {hour: 23, available: 0, changed: false, closed: false},
    {hour: 24, available: 0, changed: false, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGER":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.thurs[i], available:action.state[i].available})
            }

            return {...state, thurs:arrs}
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
    {hour: 7, available: 0, changed: false, closed: false},
    {hour: 8, available: 0, changed: false, closed: false},
    {hour: 9, available: 0, changed: false, closed: false},
    {hour: 10, available: 0, changed: false, closed: false},
    {hour: 11, available: 0, changed: false, closed: false},
    {hour: 12, available: 0, changed: false, closed: false },
    {hour: 13, available: 0, changed: false, closed: false},
    {hour: 14, available: 0, changed: false, closed: false},
    {hour: 15, available: 0, changed: false, closed: false},
    {hour: 16, available: 0, changed: false, closed: false },
    {hour: 17, available: 0, changed: false, closed: true},
    {hour: 18, available: 0, changed: false, closed: true},
    {hour: 19, available: 0, changed: false, closed: true},
    {hour: 20, available: 0, changed: false, closed: true},
    {hour: 21, available: 0, changed: false, closed: true},
    {hour: 22, available: 0, changed: false, closed: true},
    {hour: 23, available: 0, changed: false, closed: true},
    {hour: 24, available: 0, changed: false, closed: true}
]}, action) => {
    switch(action.type) {
        case "CHANGEF":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.fri[i], available:action.state[i].available})
            }

            return {...state, fri:arrs}
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
    {hour: 7, available: 0, changed: false, closed: true},
    {hour: 8, available: 0, changed: false, closed: true},
    {hour: 9, available: 0, changed: false, closed: true},
    {hour: 10, available: 0, changed: false, closed: false},
    {hour: 11, available: 0, changed: false, closed: false},
    {hour: 12, available: 0, changed: false, closed: false },
    {hour: 13, available: 0, changed: false, closed: false},
    {hour: 14, available: 0, changed: false, closed: false},
    {hour: 15, available: 0, changed: false, closed: false},
    {hour: 16, available: 0, changed: false, closed: false},
    {hour: 17, available: 0, changed: false, closed: true},
    {hour: 18, available: 0, changed: false, closed: true},
    {hour: 19, available: 0, changed: false, closed: true},
    {hour: 20, available: 0, changed: false, closed: true},
    {hour: 21, available: 0, changed: false, closed: true},
    {hour: 22, available: 0, changed: false, closed: true},
    {hour: 23, available: 0, changed: false, closed: true},
    {hour: 24, available: 0, changed: false, closed: true}
]}, action) => {
    switch(action.type) {
        case "CHANGES":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.sat[i], available:action.state[i].available})
            }

            return {...state, sat:arrs}
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
    {hour: 7, available: 0, changed: false, closed: true},
    {hour: 8, available: 0, changed: false, closed: true},
    {hour: 9, available: 0, changed: false, closed: true},
    {hour: 10, available: 0, changed: false, closed: true},
    {hour: 11, available: 0, changed: false, closed: true},
    {hour: 12, available: 0, changed: false, closed: true },
    {hour: 13, available: 0, changed: false, closed: true},
    {hour: 14, available: 0, changed: false, closed: false},
    {hour: 15, available: 0, changed: false, closed: false},
    {hour: 16, available: 0, changed: false, closed: false },
    {hour: 17, available: 0, changed: false, closed: false},
    {hour: 18, available: 0, changed: false, closed: false},
    {hour: 19, available: 0, changed: false, closed: false},
    {hour: 20, available: 0, changed: false, closed: false},
    {hour: 21, available: 0, changed: false, closed: false},
    {hour: 22, available: 0, changed: false, closed: false},
    {hour: 23, available: 0, changed: false, closed: false},
    {hour: 24, available: 0, changed: false, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGEU":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.sun[i], available:action.state[i].available})
            }
            return {...state, sun:arrs}

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
