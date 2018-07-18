/**
 * Created by Will on 06/20/2018.
 */
import React, {Component} from 'react'
//Material Imports
import { MenuItem } from 'material-ui';

const PreferenceMenuItem = ({dayname, hour, preference, id, closePopover, changeColor, SetUserPreference}) => {
    const handleSelect = () => {
        // Mutation here
        SetUserPreference(id, preference);
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

export default PreferenceMenuItem