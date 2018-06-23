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

// Apollo Stuff
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

import {initializeStates, initializeUser} from './actions/userActions'


import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


// Apollo Setup
const httpLink = new HttpLink({ uri: 'http://localhost:4000' })
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

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
