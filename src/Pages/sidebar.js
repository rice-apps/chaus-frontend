/**
 * Created by dandreini16 on 10/22/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import {toggleMenu, changePage} from '../actions/sidebarActions';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const pageTitle = () => {
    switch (window.location.pathname) {
        case "/mcal":
            return "Master Calendar"
        case "/addremove":
            return "Add/Remove Users"
        default:
            return "Employee Calendar"
    }
}

const SideBar = ({toggle, toggleMenu, changePage}) => {
    return (
        <div style={{position: 'fixed', width: '100%', zIndex: 1}}>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
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

            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

                <Drawer docked={false} open={toggle} onRequestChange={(open) => toggleMenu()}>

                    <MenuItem leftIcon={<NavigationMenu color={"black"} />} onClick={() => toggleMenu()}>
                    </MenuItem>
                    <Link to='/ecal' onClick={() => (changePage("eCalendar"), toggleMenu())}><MenuItem>Employee Calendar</MenuItem></Link>
                    <Link to='/mcal' onClick={() => (changePage("mCalendar"), toggleMenu())}><MenuItem>Master Calendar</MenuItem></Link>
                    <Link to='/addremove' onClick={() => (changePage("addRemove"), toggleMenu())}><MenuItem>Add & Remove Users</MenuItem></Link>
                    <Link to='/' onClick={() => localStorage.removeItem("token")}>
                        <RaisedButton label="Logout" secondary={true} style={{"margin-left":15}}/>
                    </Link>
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
