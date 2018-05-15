/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'
import mCal from './mCalReducer';
import eCal from './eCalReducer';
import auth from './authReducer';
import { routerReducer } from 'react-router-redux'

const Reducer = combineReducers({
    eCal, mCal, auth, routerReducer
})


export default Reducer
