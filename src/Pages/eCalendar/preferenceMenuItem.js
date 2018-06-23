/**
 * Created by Will on 06/20/2018.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { toggle_availability } from '../../actions/employeeActions'
//Material Imports
import { MenuItem } from 'material-ui';

const PreferenceMenuItem = ({dayname, hour, preference, closePopover, toggle_availability, changeColor}) => {
    const handleSelect = () => {
        // First toggle_availability
        toggle_availability(dayname, hour.hour, preference);
        // Then close select popover
        closePopover();
    }
    return (
        <MenuItem
        style={{backgroundColor: changeColor(preference)}}
        onClick={() => handleSelect()}
        />
    )
}

export default connect (
    (state) => {
      return {}
    },
    (dispatch) => {
        return {
          toggle_availability: (dayname, hour, availability) => dispatch(toggle_availability(dayname, hour, availability))
        }
    }
)(PreferenceMenuItem)