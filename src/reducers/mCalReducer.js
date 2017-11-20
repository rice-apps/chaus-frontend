/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'



const activeShiftReducer = (state={dayname:"",hour:{hour: 0}, closed:true, available:[], schedule:[""], open:false}, action) => {
    switch(action.type) {
        case "SHIFT_SELECTED":
            return {...state, available:action.available, schedule:action.schedule, open:action.open, hour:action.hour, dayname:action.dayname}
        case "CLOSE_MODAL":
            return {...state, open:action.open}
        case "TOGGLE_SCHEDULED":
            let new_available, new_schedule = []
            if (state.available.includes(action.netid)) {
                new_available = state.available.filter(x => x != action.netid)
                new_schedule = state.schedule
                new_schedule.push(action.netid)
            }
            else {
                new_schedule = state.schedule.filter(x => x != action.netid)
                new_available = state.available
                new_available.push(action.netid)
            }
            return {...state, available:new_available, schedule: new_schedule}
        default:
            return state
    }

}

export default combineReducers({
    activeShiftReducer
})

