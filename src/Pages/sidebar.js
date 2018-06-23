/**
 * Created by dandreini16 on 10/22/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import {toggleMenu, changePage} from '../actions/sidebarActions';
import { MenuItem } from 'material-ui/Menu';
import {Link} from 'react-router-dom';

import NavigationMenu from '@material-ui/icons/menu';

<<<<<<< HEAD
const SideBar = ({toggle, toggleMenu, changePage, page}) => {
    let pageTitle
    if (page == "mCalendar") {
        pageTitle = "Master Calendar"
    } else if (page == "eCalendar") {
        pageTitle = "Employee Availability"
    }else {
        pageTitle = "Add/Remove Users"
=======
const pageTitle = () => {
    switch (window.location.pathname) {
        case "/mcal":
            return "Master Calendar"
        case "/addremove":
            return "Add/Remove Users"
        default:
            return "Employee Calendar"
>>>>>>> security
    }
}

const SideBar = ({toggle, toggleMenu, changePage}) => {
    return (
        <div style={{position: 'fixed', width: '100%', zIndex: 1}}>
            <MuiThemeProvider >
                <AppBar
                    title={pageTitle()}
                    titleStyle={{color: 'white'}}
                    zDepth={1}
                    style={{background:'#556987', display: 'flex', alignItems: 'center'}}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconStyleLeft={{filter: 'invert(100%)'}}
                    onLeftIconButtonTouchTap={() => toggleMenu()}
                >
                    <a href={'http://coffeehouse.rice.edu/'} target={'_blank'}>
                        <img src={"http://coffeehouse.blogs.rice.edu/files/2017/07/Website-header-logo-utp0mt.png"} height={40} />
                    </a>
                </AppBar>

            </MuiThemeProvider>

            <MuiThemeProvider>

                <Drawer docked={false} open={toggle} onRequestChange={(open) => toggleMenu()}>

<<<<<<< HEAD
                        <MenuItem leftIcon={<NavigationMenu color={"black"} />} onClick={() => toggleMenu(toggle)}>
                        </MenuItem>
                        <MenuItem><Link to='/ecal' onClick={() => (changePage("eCalendar"), toggleMenu(toggle))}>Employee Calendar</Link></MenuItem>
                        <MenuItem><Link to='/mcal' onClick={() => (changePage("mCalendar"), toggleMenu(toggle))}>Master Calendar</Link></MenuItem>
                        <MenuItem><Link to='/addremove' onClick={() => (changePage("addRemove"), toggleMenu(toggle))}>Add & Remove Users</Link></MenuItem>

                        <Link to='/' onClick={() => localStorage.removeItem("token")}>
                            <Button variant="Raised" label="Logout" secondary={true} style={{"margin-left":15}}/>
                        </Link>
=======
                    <MenuItem leftIcon={<NavigationMenu color={"black"} />} onClick={() => toggleMenu()}>
                    </MenuItem>
                    <Link to='/ecal' onClick={() => (changePage("eCalendar"), toggleMenu())}><MenuItem>Employee Calendar</MenuItem></Link>
                    <Link to='/mcal' onClick={() => (changePage("mCalendar"), toggleMenu())}><MenuItem>Master Calendar</MenuItem></Link>
                    <Link to='/addremove' onClick={() => (changePage("addRemove"), toggleMenu())}><MenuItem>Add & Remove Users</MenuItem></Link>
                    <Link to='/' onClick={() => localStorage.removeItem("token")}>
                        <RaisedButton label="Logout" secondary={true} style={{"margin-left":15}}/>
                    </Link>
>>>>>>> security
                </Drawer>

            </MuiThemeProvider>

        </div>
    )
}

export default connect(
    (state) => {
        return {
            toggle: state.eCal.sideBarReducer.toggle
        }
    },
    (dispatch) => {
        return {
            toggleMenu: () => dispatch({type:'TOGGLEBURGER'}),
            changePage: (page) => dispatch(changePage(page))

        }
    }
)(SideBar)
