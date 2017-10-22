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
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
                <AppBar

                    title="Employee Availability"
                    style={{background:"white"}}

                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={() => toggleMenu(toggle)}

                />

            </MuiThemeProvider>

            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>

                <Drawer open={toggle}>

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