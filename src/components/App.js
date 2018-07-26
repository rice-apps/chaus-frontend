/**
 * Created by Jeffr on 7/17/2017.
 * Updated by Will on 7/26/2018.
 */

 // Dependencies
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import LoginPage from '../Pages/login'
import Auth from '../Pages/Auth/auth'
import AdminPage from '../Pages/Admin/admin';
import MemberPage from '../Pages/MemberView/memberPage';
import MasterPage from '../Pages/MasterView/masterPage';
// Authorization
import {Admin, Employee} from './InnerAuth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
 )

const App = () => {
    // Fix document body margin
    document.body.style.margin = 0;
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path='/' component={Employee(MemberPage)}/>
                    <PrivateRoute path='/ecal' component={Employee(MemberPage)}/>
                    <PrivateRoute path='/mcal' component={Employee(MasterPage)} />
                    <PrivateRoute path='/admin' component={Admin(AdminPage)} />                    
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/auth' component={Auth} />
                </Switch>
            </BrowserRouter>
        </div>    
    )
}

export default App;
