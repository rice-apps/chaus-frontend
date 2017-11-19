/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'


const activeShiftReducer = (state={day:"",hour:0, closed:true, available:[], schedule:[]}, action) => {
    switch(action.type) {
        case "SHIFT_SELECTED":
            return {...state, avaliable:action.avaliable, schedule:action.schedule}
        default:
            return state
    }

}

export default combineReducers({
    activeShiftReducer
})

