/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'

// New beginning

// TODO: Change reducer name, remove new
const newScheduleReducer = (state={
    schedule: {}
}, action) => {
    switch(action.type) {
        case "GET_MASTER_SCHEDULE":
            console.log(action.schedule);
            return {...state, schedule: action.schedule}
        case "GET_SHIFT_SCHEDULED":
            return {...state}
        case "SAVE_SHIFT_SCHEDULED":
            return {...state}
        default:
            return {...state}
    }
}

// Helper function for newActiveShiftReducer
const netidSorter = (userList) => {
    var userListCopy = userList.slice();
    return userListCopy.sort((userA, userB) => {
        return userA.netid > userB.netid;
    });
}

// TODO: Change reducer name; remove new
const newActiveShiftReducer = (state={
    shift: "",
    availabilities: {},
    scheduled: [],
    saving: false
}, action) => {
    switch(action.type) {
        case "SET_SHIFT_ID":
            return {...state, shift: action.shiftId};
        case "SORT_AVAILABILITIES": // TODO: Change name, will be confusing with abc sort
            var abcSortedAvailabilities = {};
            for (var priority in action.sortedAvailabilities) {
                var userList = action.sortedAvailabilities[priority];
                // Sorts each list of users alphabetically by netid
                abcSortedAvailabilities[priority] = netidSorter(userList);
            }
            return {...state, availabilities: abcSortedAvailabilities};
        case "SET_SCHEDULED":
            // Sorts scheduled users alphabetically by netid 
            var scheduledList = netidSorter(action.scheduled);
            return {...state, scheduled: scheduledList};
        case "RESET_ACTIVE_SHIFT":
            return {...state, availabilities: {}, scheduled: []};
        case "UPDATE_SCHEDULED":
            var scheduled = state.scheduled.slice();
            // Check if user present
            var filteredUsers = scheduled.filter((user) => {
                return user.netid == action.user.netid;
            });
            // Remove from scheduled if present
            if (filteredUsers.length > 0) {
                // Gets netid of each user, then finds index of object with correct netid
                var index = scheduled
                .map((user) => { return user.netid })
                .indexOf(action.user.netid);
                // Remove user object in place
                scheduled.splice(index, 1);
            }
            // Otherwise, add them in
            else {
                // Push user object into scheduled array
                scheduled.push(action.user);
                // Sort alphabetically
                scheduled = netidSorter(scheduled);
            }
            return {...state, scheduled: scheduled}
        case "SAVE_SCHEDULED_PREPARING":
            return {...state, saving: true};
        case "SAVE_SCHEDULED_FINISHED":
            return {...state, saving: false};
        default:
            return {...state};
    }
}

// TODO: Refactor into Active Shift Reducer
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

export default combineReducers({
    newActiveShiftReducer, newScheduleReducer, checkTotalsReducer
})
