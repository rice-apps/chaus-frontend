/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'
import mCal from './mCalReducer';
import eCal from './eCalReducer';
import auth from './authReducer';
import { routerReducer } from 'react-router-redux'



const pageReducer = (state={location:"mCalendar"}, action) => {
    switch(action.type) {
        case "CHANGELOCATION":
            return {...state, location:action.location}
        default:
            return state
    }
}

const Reducer = combineReducers({
    eCal, mCal, auth, pageReducer, routerReducer
})


export default Reducer
