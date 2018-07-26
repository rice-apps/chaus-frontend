/**
 * Created by Will on 5/25/2018.
 */

import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import { MuiThemeProvider } from 'material-ui/styles';

import '../css/general.scss';

/*
Input:
- legend: object containing mapping of setting (string) to corresponding color (string)
Ex: 
{
    "Empty": "#FFFFFF",
    "Has Room": "#000000",
    ...
}
*/
const ColorLegend = ({legend}) => {
    return (
        <div className="color-legend">
            <MuiThemeProvider>
            {   // Iterate through keys of object
                Object.keys(legend).map((setting, index) => {
                // Get color associated to setting
                var color = legend[setting];
                return (
                    <div className="color-key">
                        <FlatButton style={{ backgroundColor: color, height: 15, minWidth: 15, marginRight: '1%' }} />
                        = {setting}
                    </div>
                )
            })}
            </MuiThemeProvider>
        </div>
    )
}

export default ColorLegend;