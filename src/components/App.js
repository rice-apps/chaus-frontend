/**
 * Created by Jeffr on 7/17/2017.
 */

 // Dependencies
import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

// Pages
import Sidebar from '../Pages/sidebar'
import MFullCalendar from '../Pages/mCalendar/master-calendar'
import Logo from '../Pages/chaus-logo'
import FullCalendar from '../Pages/eCalendar/full-calendar'
import LoginPage from '../Pages/login'
import AddRemove from '../Pages/AddDrop/add-remove'
import Auth from '../Pages/Auth/auth'
import {Admin, User} from './InnerAuth'

// const Authorization = (allowedRoles) => (
//     ({ component: Component, ...rest }) => (
//         <Route {...rest} render={(props) => (
//             localStorage.getItem('token') && allowedRoles.includes(props.user.role)
//                 ? <Component {...props} />
//                 : <Redirect to='/login' />
//         )} />
//     )
// );


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
 )

const App = () => {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute exact path='/' component={FullCalendar}/>
                        <PrivateRoute path='/ecal' component={FullCalendar}/>
                        <PrivateRoute path='/mcal' component={MFullCalendar} />
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/auth' component={Auth} />
                        <Route path='/addremove' component={Admin(AddRemove)} />
                    </Switch>
                </BrowserRouter>
            </div>    
        )
}

export default App
