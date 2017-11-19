/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'



const activeShiftReducer = (state={dayname:"k",hour:{hour: 0}, closed:true, available:[-1], schedule:[-1], open:false}, action) => {
    switch(action.type) {
        case "SHIFT_SELECTED":
            console.log(action)
            return {...state, available:action.available, schedule:action.schedule, open:action.open}
        case "CLOSE_MODAL":
            return {...state, open:action.open}
        default:
            return state
    }

}

export default combineReducers({
    activeShiftReducer
})

