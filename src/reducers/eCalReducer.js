/**
 * Created by Will on 2/17/2018.
 */
import { combineReducers } from 'redux'
import 'babel-polyfill'; // for async/await

// New beginning 

const newScheduleReducer = (state={
  schedule: {}, hoursFilled: false, saving: false, activeUser: { netid: "wsm3" }
}, action) => {
  var newSchedule;
  switch(action.type) {
    case "GET_AVAILABILITY_NEW":
      newSchedule = {};
      var week = action.schedule.week;
      // Iterate through each day of incoming schedule
      for (var index in week) {
        var dayName = week[index].dayName;
        // Shallow copy of day
        newSchedule[dayName] = {...week[index]};
        // Shallow copy of shifts
        var shifts = [...newSchedule[dayName].shifts];
        // Iterate through each shift index
        for (var shiftIndex in shifts) {
          // Copy shift object, add changed property
          var shift = {...shifts[shiftIndex], changed: false};
          // Set availability object to the preference, essentially unnesting object
          if (!shift.closed) {
            shift.availabilities = shift.availabilities[0].availability;
          }
          else {
            shift.availabilities = 0;
          }
          shifts[shiftIndex] = shift;
        }
        // Set shifts property to updated shifts object
        newSchedule[dayName].shifts = shifts;
      }
      newSchedule = {week: newSchedule}
      return {...state, schedule: newSchedule}
    case "UPDATE_PREFERENCE":
      // Shallow copy of day
      var day = {...state.schedule.week[action.dayName]};
      var newShifts = [];
      // Iterate through shift indicies
      for (var shiftIndex in day.shifts) {
        var shift = day.shifts[shiftIndex];
        // Once we find the shift we want to change
        if (shift.id == action.id) {
          // Copy shift object, change availability, update changed property
          shift = {
            ...shift,
            availabilities: action.availability,
            changed: true 
          };
        }
        // Add shift object to new shift array
        newShifts.push(shift);
      }
      // Update shift array for day
      day.shifts = newShifts;
      return {
        ...state,
        schedule: {
          ...state.schedule,
          week: {
            ...state.schedule.week,
            [action.dayName]: day
          }
        }
      }
    case "PRE_SAVE_PREFERENCE":
      return {...state, saving: true}
    case "POST_SAVE_PREFERENCE":
      return {...state, saving: false}
    default:
      return {...state}
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

export default combineReducers({
    sideBarReducer, userReducer, newScheduleReducer
})
