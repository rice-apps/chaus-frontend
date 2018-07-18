/**
 * Created by Will on 7/19/2018.
 */

// Imports
import { combineReducers } from 'redux';

const memeReducer = (state={netid: "", schedule: {}}, action) => {
    switch (action.type) {
        case "INITIALIZE_CALENDAR":
            console.log("After");
            return {...state, schedule: action.schedule};
        default:
            return {...state}
    }
}

export default combineReducers({
    memeReducer
});