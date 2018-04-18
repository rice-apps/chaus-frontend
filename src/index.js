import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import LoginPage from "./Pages/login.js";
import Auth from "./Pages/Auth/auth";
import FullCalendar from "./Pages/eCalendar/full-calendar.js"
import AddRemove from "./Pages/AddDrop/add-remove.js"
import Reducer from './reducers/index'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware, combineReducers } from 'redux'

import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

import {get_users} from './actions/userActions'

// import {get_netids} from './actions/userActions'

//import { Router, Route, browserHistory ,hashHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// const combinedReducer = combineReducers({...Reducer, routing: routerReducer});

const store = createStore(
    Reducer, applyMiddleware(thunkMiddleware),
)

//const history = syncHistoryWithStore(hashHistory, store)

const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={(props) => (
       localStorage.getItem('token')
           ? <Component {...props} />
           : <Redirect to='/login' />
   )} />
)


get_users()(store.dispatch)
// get_netids()(store.dispatch)
ReactDOM.render(
   <Provider store={store}>
   <BrowserRouter>
       <Switch>
           <Route exact path='/' component={LoginPage}/>
           <PrivateRoute path='/ecal' component={FullCalendar}/>
           <PrivateRoute path='/mcal' component={App} />
           <PrivateRoute path='/addremove' component={AddRemove}/>
           <Route path='/login' component={LoginPage}/>
           <Route path='/auth' component={Auth} />
       </Switch>
   </BrowserRouter>
   </Provider>
   , document.getElementById('app')
);
