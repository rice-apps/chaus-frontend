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

import { initializeCalendar } from './actions/employeeActions'
import { getUserInfo } from './actions/authActions';


import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Apollo Imports
import ApolloClient, { ApolloLink, InMemoryCache, gql } from "apollo-boost";
import { withClientState } from "apollo-link-state";
import { ApolloProvider } from "react-apollo";

// Apollo Setup
const uri = "http://localhost:4000";
const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache: cache,
    uri: uri, 
    clientState: {
        resolvers: {
            Mutation: {
                updateShiftAvailability: (_, { availabilityId, availability }, { cache }) => {
                  // First get current shift availability
                  const id = `UserAvailability:${availabilityId}`;
                  const fragment = gql`
                      fragment updateAvailability on UserAvailability {
                          availability
                      }
                  `;
                  const userAvailability = cache.readFragment({ fragment, id });
                  const data = {
                      ...userAvailability,
                      availability: availability,
                  };
                  // Then update it with passed in thing
                  cache.writeFragment({ fragment, id, data });
                  return null;
                },
              },
        }
    }
});

const store = createStore(
    Reducer, applyMiddleware(thunkMiddleware)
);

initializeCalendar()(store.dispatch, store.getState)
// initializeStates()(store.dispatch)
// initializeUser()(store.dispatch)
ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>, document.getElementById('app')
);

