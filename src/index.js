import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import FullCalendar from "./pages/eCalendar/full-calendar.js"
import Reducer from './reducers/index'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'
import {get_users} from './actions/userActions'

// import {get_netids} from './actions/userActions'

import { Router, Route, browserHistory ,hashHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//const combinedReducer = combinedReducer(Reducer, routerReducer)

const store = createStore(
    Reducer, applyMiddleware(thunkMiddleware),
)



const history = syncHistoryWithStore(hashHistory, store)


get_users()(store.dispatch)
// get_netids()(store.dispatch)
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/mcal" component={App}>
            </Route>
            <Route path="/ecal" component={FullCalendar}>
            </Route>
            <Route path="/auth" component={App}>
            </Route>
        </Router>

    </Provider>, document.getElementById('app')
);
