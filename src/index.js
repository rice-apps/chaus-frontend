import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import LoginPage from "./Pages/login.js"

import FullCalendar from "./Pages/eCalendar/full-calendar.js"
import Reducer from './reducers/index'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'


import { createStore, applyMiddleware } from 'redux'

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import {get_users} from './actions/userActions'

// import {get_netids} from './actions/userActions'

//import { Router, Route, browserHistory ,hashHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//const combinedReducer = combinedReducer(Reducer, routerReducer)

const store = createStore(
    Reducer, applyMiddleware(thunkMiddleware),
)

//const history = syncHistoryWithStore(hashHistory, store)


get_users()(store.dispatch)
// get_netids()(store.dispatch)
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/ecal' component={FullCalendar}/>
            <Route path='/mcal' component={App}/>
            <Route path='/login' component={LoginPage}/>
        </Switch>
    </BrowserRouter>
    </Provider>
    , document.getElementById('app')
);
