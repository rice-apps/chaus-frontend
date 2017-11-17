/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'

import eCal from './eCalReducer';
// import b from 'src/reducers/mCalReducer';



const pageReducer = (state={location:"eCalendar"}, action) => {
    switch(action.type) {
        case "CHANGELOCATION":
            return {...state, location:action.location}
        default:
            return state
    }
}


// const allReducers = Object.assign({}, reducers1, reducers2);


const Reducer = combineReducers({
    eCal, pageReducer
})


export default Reducer
