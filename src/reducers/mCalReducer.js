/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'

const mmonReducer = (state={mon:[
    {hour: 7, closed: true},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
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

const mtuesReducer = (state={tues:[
    {hour: 7, closed: true},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
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

const mwedReducer = (state={wed:[
    {hour: 7, closed: true},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
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

const mthursReducer = (state={thurs:[
    {hour: 7, closed: true},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
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

const mfriReducer = (state={fri:[
    {hour: 7, closed: true},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
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

const msatReducer = (state={sat:[
    {hour: 7, closed: true},
    {hour: 8, closed: true},
    {hour: 9, closed: true},
    {hour: 10, closed: true},
    {hour: 11, closed: true},
    {hour: 12, closed: true },
    {hour: 13, closed: true},
    {hour: 14, closed: true},
    {hour: 15, closed: true},
    {hour: 16, closed: true},
    {hour: 17, closed: true},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
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
const msunReducer = (state={sun:[
    {hour: 7, closed: true},
    {hour: 8, closed: true},
    {hour: 9, closed: true},
    {hour: 10, closed: true},
    {hour: 11, closed: true},
    {hour: 12, closed: true },
    {hour: 13, closed: true},
    {hour: 14, closed: true},
    {hour: 15, closed: true},
    {hour: 16, closed: true},
    {hour: 17, closed: true},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
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


const activeShiftReducer = (state={dayname:"",hour:{hour: 0}, closed:true, p1:[], p2:[], p3:[], p4:[], schedule:[""], open:false, userHours:{netid:{max:0,min:0,total:0}}}, action) => {
    switch(action.type) {
        case "SHIFT_SELECTED":
            return {...state, p1:action.p1, p2:action.p2, p3:action.p3, p4:action.p4, schedule:action.schedule, open:action.open, hour:action.hour, dayname:action.dayname, userHours:action.userHours}
        case "CLOSE_MODAL":
            return {...state, open:action.open}
        case "TOGGLE_SCHEDULED":
            console.log("TOGGLING: ", state.userHours)
            let new_schedule = []
            let user_hours_copy = {...state.userHours}
            var user = action.netid
            if (state.schedule.includes(user)) {
                new_schedule = state.schedule.filter(x => x != user)
                var new_total = user_hours_copy[user].total - 1
            }
            else {
                new_schedule = (state.schedule).slice()
                new_schedule.push(user)
                var new_total = user_hours_copy[user].total + 1
            }
            console.log("USER: ", user_hours_copy)
            console.log("NEW TOTAL: ", new_total)
            return {...state, schedule: new_schedule, userHours: {...state.userHours, [user]: {...user_hours_copy[user], total: new_total}}}
        default:
            return state
    }

}

const checkTotalsReducer = (state={shifts: []}, action) =>{
    switch(action.type) {
        case "CHECK_TOTALS":
            var shifts = []
            action.shifts.map(
                (shift) => {
                    shifts.push((shift.scheduled).length)
                })
            return {...state, shifts: shifts}
        case "USER_TOTAL_HOURS_UPDATE":
            return {...state}
        default:
            return state
    }
}

/*const calendarMaxReducer = (state={overscheduled: false}, action) => {
    switch(action.type) {
        case "MAKE_CALENDAR":
            return {...state, overscheduled: action.overscheduled}
        default:
            return state
    }

}*/

/*const activeShiftReducer = (state={dayname:"",hour:{hour: 0}, closed:true, p1:[], p2:[], p3:[], p4:[], schedule:[""], open:false, userHours: {}}, action) => {
    switch(action.type) {
        case "SHIFT_SELECTED":
            return {...state, p1:action.p1, p2:action.p2, p3:action.p3, p4:action.p4, schedule:action.schedule, open:action.open, hour:action.hour, dayname:action.dayname, userHours:{jmd16: {max: 10, min: 5, total: 6}, da30: {max: 8, min: 4, total: 8}, qqq99: {max: 1, min: 0, total: 4}, ob10: {max: 1, min: 0, total: 4}, jlt10: {max: 1, min: 0, total: 4}, jhw5: {max: 5, min: 0, total: 4}, jf35: {max: 1, min: 0, total: 4}, wsm3: {max: 1, min: 0, total: 4}, abc1: {max: 1, min: 0, total: 4}, xyz2: {max: 1, min: 0, total: 4}}}
        case "CLOSE_MODAL":
            return {...state, open:action.open}
        case "TOGGLE_SCHEDULED":
            console.log("TOGGLING: ", state.userHours)
            let new_schedule = []
            var user = action.netid
            if (state.schedule.includes(user)) {
                new_schedule = state.schedule.filter(x => x != user)
                var new_total = state.userHours[user].total - 1
            }
            else {
                new_schedule = (state.schedule).slice()
                new_schedule.push(user)
                var new_total = state.userHours[user].total + 1
            }
            console.log("USER: ", state.userHours)
            console.log("NEW TOTAL: ", new_total)
            return {...state, schedule: new_schedule, userHours: {...state.userHours, [user]: {...state.userHours[user], total: new_total}}}
        default:
            return state
    }
}*/

/*const activeShiftReducer = (state={dayname:"",hour:{hour: 0}, closed:true, p1:[], p2:[], p3:[], p4:[], schedule:[""], open:false, userHours:{}}, action) => {
    switch(action.type) {
        case "SHIFT_SELECTED":
            return {...state, p1:action.p1, p2:action.p2, p3:action.p3, p4:action.p4, schedule:action.schedule, open:action.open, hour:action.hour, dayname:action.dayname, userHours:action.userHours}
        case "CLOSE_MODAL":
            return {...state, open:action.open}
        case "TOGGLE_SCHEDULED":
            let new_schedule = []
            if (state.schedule.includes(action.netid)) {
                new_schedule = state.schedule.filter(x => x != action.netid)
                new_total = state.userHours[action.netid].total + 1
            }
            else {
                new_schedule = (state.schedule).slice()
                new_schedule.push(action.netid)
                new_total = state.userHours[action.netid].total - 1
            }
            var user = action.netid
            return {...state, schedule: new_schedule, userHours: {...state, user: {...state, total: new_total}}}
        default:
            return state
    }

}*/

export default combineReducers({
    activeShiftReducer, checkTotalsReducer, mmonReducer, mtuesReducer, mwedReducer, mthursReducer, mfriReducer, msatReducer, msunReducer
})
