import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import LoginPage from "./Pages/login.js";
import Auth from "./Pages/Auth/auth";
import FullCalendar from "./Pages/eCalendar/full-calendar.js"
import MFullCalendar from './Pages/mCalendar/master-calendar'
import Reducer from './reducers/reducerCombined'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware, combineReducers } from 'redux'

import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

import {initializeStates, initializeUser} from './actions/userActions'


import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const store = createStore(
    Reducer, applyMiddleware(thunkMiddleware)
)
initializeStates()(store.dispatch)
initializeUser()(store.dispatch)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')
);
