import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Reducer from './reducers/reducerCombined'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'

import { authenticateUser } from './actions/authActions';

// Apollo Imports
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Apollo Setup
const uri = "http://localhost:4000";
const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache: cache,
    uri: uri,
});

const store = createStore(
    Reducer, applyMiddleware(thunkMiddleware)
);

// Attempt to authenticate user
authenticateUser()(store.dispatch);

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>, document.getElementById('app')
);

