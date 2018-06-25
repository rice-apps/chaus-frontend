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

// Apollo Imports
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Apollo Setup
const uri = "http://localhost:4000";
const client = new ApolloClient({
  uri: uri
});

const store = createStore(
    Reducer, applyMiddleware(thunkMiddleware)
)
initializeStates()(store.dispatch)
initializeUser()(store.dispatch)
ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>, document.getElementById('app')
);
