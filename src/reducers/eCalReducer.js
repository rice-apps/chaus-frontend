/**
 * Created by Will on 2/17/2018.
 */
import { combineReducers } from 'redux'

const monDefault = [
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
]
const tuesDefault = [
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
]
const wedDefault = [
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
]
const thursDefault = [
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
]
const friDefault = [
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
]
const satDefault = [
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
]
const sunDefault = [
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
]

const scheduleReducer = (state={schedule:{M:monDefault, T:tuesDefault, W:wedDefault, R:thursDefault, F:friDefault, S:satDefault, U:sunDefault}}, action) => {
    let new_schedule;
    switch(action.type) {
        case "GET_AVAILABILITY":
            console.log(action.schedule)
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
        case "CHANGE_HOUR_M":
            new_schedule = []
            state.schedule.M.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  new_schedule.push({...shift, available: action.available, changed: action.changed})
                }
                else {
                  new_schedule.push({...shift})
                }
              }
            )
            return {...state, schedule: {...state.schedule, M: new_schedule}}
        case "CHANGE_HOUR_T":
            new_schedule = []
            state.schedule.T.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  new_schedule.push({...shift, available: action.available, changed: action.changed})
                }
                else {
                  new_schedule.push({...shift})
                }
              }
            )
            return {...state, schedule: {...state.schedule, T: new_schedule}}
        case "CHANGE_HOUR_W":
            new_schedule = []
            state.schedule.W.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  new_schedule.push({...shift, available: action.available, changed: action.changed})
                }
                else {
                  new_schedule.push({...shift})
                }
              }
            )
            return {...state, schedule: {...state.schedule, W: new_schedule}}
        case "CHANGE_HOUR_R":
            new_schedule = []
            state.schedule.R.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  new_schedule.push({...shift, available: action.available, changed: action.changed})
                }
                else {
                  new_schedule.push({...shift})
                }
              }
            )
            return {...state, schedule: {...state.schedule, R: new_schedule}}
        case "CHANGE_HOUR_F":
            new_schedule = []
            state.schedule.F.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  new_schedule.push({...shift, available: action.available, changed: action.changed})
                }
                else {
                  new_schedule.push({...shift})
                }
              }
            )
            return {...state, schedule: {...state.schedule, F: new_schedule}}
        case "CHANGE_HOUR_S":
            new_schedule = []
            state.schedule.S.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  new_schedule.push({...shift, available: action.available, changed: action.changed})
                }
                else {
                  new_schedule.push({...shift})
                }
              }
            )
            return {...state, schedule: {...state.schedule, S: new_schedule}}
        case "CHANGE_HOUR_U":
            new_schedule = []
            state.schedule.U.map(
              (shift) => {
                if (shift.hour == action.hour) {
                  new_schedule.push({...shift, available: action.available, changed: action.changed})
                }
                else {
                  new_schedule.push({...shift})
                }
              }
            )
            return {...state, schedule: {...state.schedule, U: new_schedule}}
        case "RESET_CHANGED_PROPERTY":
            let new_week = {}
            let sched = state.schedule
            for (var day in state.schedule) {
              let new_day = []
              console.log(state.schedule[day])
              state.schedule[day].map(
                (shift) => {
                  new_day.push({...shift, changed: false})
                }
              )
              new_week[day] = new_day
            }
            console.log(new_week)
            return {...state, schedule: new_week}
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
