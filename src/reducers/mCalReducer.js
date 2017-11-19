/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'



const activeShiftReducer = (state={dayname:"",hour:{hour: 0}, closed:true, available:[], schedule:[""], open:false}, action) => {
    switch(action.type) {
        case "SHIFT_SELECTED":
            console.log(action)
            return {...state, available:action.available, schedule:action.schedule, open:action.open}
        case "CLOSE_MODAL":
            return {...state, open:action.open}
        case "TOGGLE_SCHEDULED":
            console.log("inside reducer" + state.available + state.schedule)
            let new_available = []
            let new_schedule = []
            if (state.available.includes(action.netid)) {
              // new_available = state.available.filter(x => x != action.netid)
              state.available.map(x => {
                if (x != action.netid) {
                  console.log("x: " + x )
                  new_available.push(x)
                }
              })
              new_schedule = state.schedule
              new_schedule.push(action.netid)
            }
            else {
              state.schedule.map(x => {
                if (x != action.netid) {
                  console.log("x: " + x )
                  new_schedule.push(x)
                }
              })          
              new_available = state.available 
              new_available.push(action.netid)
            }
            console.log("show new schedule" + new_schedule)
            return {...state, available:new_available, schedule: new_schedule}
        default:
            return state
    }

}

export default combineReducers({
    activeShiftReducer
})

