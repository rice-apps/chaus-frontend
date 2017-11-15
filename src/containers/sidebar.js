/**
 * Created by dandreini16 on 10/22/17.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import {toggleMenu} from '../actions/sidebarActions';
import MenuItem from 'material-ui/MenuItem';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const SideBar = ({toggle, toggleMenu}) => {


    return (
        <div style={{position: 'fixed', width: '100%', zIndex: 1}}>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
                <AppBar


                    title="Employee Availability"
                    titleStyle={{color: 'white'}}
                    zDepth={1}
                    style={{background:'#556987', display: 'flex', alignItems: 'center'}}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconStyleLeft={{filter: 'invert(100%)'}}
                    onLeftIconButtonTouchTap={() => toggleMenu(toggle)}

                >
                    <a href={'http://coffeehouse.rice.edu/'} target={'_blank'}>
                        <img src={"http://coffeehouse.blogs.rice.edu/files/2017/07/Website-header-logo-utp0mt.png"} height={40} />
                    </a>
                </AppBar>

            </MuiThemeProvider>

            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

                <Drawer open={toggle} >

                        <MenuItem leftIcon={<NavigationMenu color={"black"} />} onClick={() => toggleMenu(toggle)}>
                        </MenuItem>

                        <MenuItem >Employee Availability</MenuItem>
                        <MenuItem >Master Schedule</MenuItem>
                </Drawer>

            </MuiThemeProvider>

        </div>
    )
}


export default connect(
    (state) => {
        return {
            toggle: state.sideBarReducer.toggle
        }
    },
    (dispatch) => {
        return {
            toggleMenu: (state) => dispatch(toggleMenu(state))
        }
    }
)(SideBar)