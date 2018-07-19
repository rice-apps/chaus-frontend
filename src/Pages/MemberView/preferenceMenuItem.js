/**
 * Created by Will on 06/20/2018.
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//Action Imports
import { updatePreference } from '../../actions/employeeActions';
//Material Imports
import { MenuItem } from 'material-ui';

const PreferenceMenuItem = ({ dayName, hour, preference, shiftId, closePopover, changeColor, updatePreference }) => {
    const handleSelect = () => {
        // Mutation here
        updatePreference(shiftId, preference, dayName);
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

export default connect(
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            updatePreference: (shiftId, preference, dayName) => dispatch(updatePreference(shiftId, preference, dayName))
        }
    }
)(PreferenceMenuItem)