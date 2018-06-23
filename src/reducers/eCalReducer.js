/**
 * Created by Will on 2/17/2018.
 */
import { combineReducers } from 'redux'
import 'babel-polyfill'; // for async/await

const monDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
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
  {hour: 18, available: 0, changed: false, closed: true},,
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const tuesDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
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
  {hour: 18, available: 0, changed: false, closed: true},,
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const wedDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
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
  {hour: 18, available: 0, changed: false, closed: true},,
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const thursDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
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
  {hour: 18, available: 0, changed: false, closed: true},,
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const friDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
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
  {hour: 18, available: 0, changed: false, closed: true},,
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
  {hour: 10, available: 0, changed: false, closed: true},
  {hour: 11, available: 0, changed: false, closed: true},
  {hour: 12, available: 0, changed: false, closed: true },
  {hour: 13, available: 0, changed: false, closed: true},
  {hour: 14, available: 0, changed: false, closed: true},
  {hour: 15, available: 0, changed: false, closed: true},
  {hour: 16, available: 0, changed: false, closed: true},
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
  {hour: 14, available: 0, changed: false, closed: true},
  {hour: 15, available: 0, changed: false, closed: true},
  {hour: 16, available: 0, changed: false, closed: true},
  {hour: 17, available: 0, changed: false, closed: true},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]

const scheduleReducer = (state={schedule:{U:sunDefault, M:monDefault, T:tuesDefault, W:wedDefault, R:thursDefault, F:friDefault, S:satDefault}, hoursFilled: false}, action) => {
    let new_schedule;
    switch(action.type) {
        case "GET_AVAILABILITY":
            console.log("THIS IS THE SCHEDULE when GET_AVAILABILITY is CALLED: " + action.schedule)
            new_schedule = {
              U: action.schedule[0],
              M: action.schedule[1],
              T: action.schedule[2],
              W: action.schedule[3],
              R: action.schedule[4],
              F: action.schedule[5],
              S: action.schedule[6],
            }
            return {...state, schedule:new_schedule}

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
        case "CHECK_HOURS_FILLED":
            let hoursFilled = true;
            // Check each day in schedule in parallel
            let availability = state.schedule
            Object.keys(availability).forEach(async (day) => {
              // Now iterate through each preference in parallel
              availability[day].forEach(async (shiftObj) => {
                if (shiftObj['closed'] == false && shiftObj['available'] == 0) {
                  hoursFilled = false
                }
              })
            })
            return {...state, hoursFilled}
        default:
            return state
    }
}

const sideBarReducer = (state={toggle:false}, action) => {
    switch(action.type) {
        case "TOGGLEBURGER":
            return {...state, toggle:!state.toggle}
        default:
            return state
    }

}

const userReducer = (state={netids:[], users: []}, action) => {
    let new_netids;
    let new_users;
    switch(action.type) {
        case "GET_NETIDS":
            console.log(action.netids)
            return {...state, netids:action.netids}
        case "GET_USERS":
            let newarr = []
            for (let i in action.users) {
              console.log("netids: " + action.users[i].netid)
              newarr.push(action.users[i].netid)

            }
            return {...state, netids:newarr, users: action.users}
        case "CREATE_USER_FAILED":
            return {...state}
        case "CREATE_USER_SUCCESS":
            // Add created user to netids
            new_netids = state.netids.slice();
            new_netids.push(action.netid);
            // // Add created user to users
            // new_users = state.users.slice();
            // new_users.push({...action.payload, netid: action.netid})
            return {...state, netids: new_netids, users: action.users}
        case "DELETE_USER_FAILED":
            return {...state}
        case "DELETE_USER_SUCCESS":
            // Remove deleted user from netids
            new_netids = state.netids.slice();
            // find position of netid in array
            let netid_location = new_netids.indexOf(action.netid);
            // take it out
            new_netids.splice(netid_location, 1);
            // // Remove deleted user from users: filter array without user
            // new_users = state.users.filter(user => user.netid != action.netid);
            return {...state, netids: new_netids, users: action.users}
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

const defaultScheduled = {
  M:[],

}

const activeReducer = (state={user:{}, schedule:{U:[], M:[], T:[], W:[], R:[], F:[], S:[]}}, action) => {

    switch(action.type) {
        case "USER_SELECTED":
            return {...state, user:action.user}
        case "GET_SCHEDULED":
            let new_schedule = {
              U: action.schedule[0],
              M: action.schedule[1],
              T: action.schedule[2],
              W: action.schedule[3],
              R: action.schedule[4],
              F: action.schedule[5],
              S: action.schedule[6],
            }
            return {...state, schedule:new_schedule}
        case "GENERATE":
            return {...state, schedule:action.schedule}
        case "ACTIVEUSER_IDEAL_HOUR_UPDATE":
            return {...state, user: {...state.user, idealHour: action.hours}}
        case "ACTIVEUSER_MAX_HOUR_UPDATE":
            return {...state, user: {...state.user, maxHour: action.hours}}
        default:
            return state
    }
}

export default combineReducers({
    sideBarReducer, activeReducer, scheduleReducer, userReducer
})
