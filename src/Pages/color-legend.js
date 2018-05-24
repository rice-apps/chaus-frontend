/**
 * Created by Will on 5/25/2018.
 */

import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'

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
        <div style={{position: 'absolute', right: 60, top: 105}}>
            {   // Iterate through keys of object
                Object.keys(legend).map((setting, index) => {
                // Get color associated to setting
                var color = legend[setting];
                return (
                    <div>
                        <FlatButton style={{ backgroundColor: color, height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5 }} />
                        = {setting}
                    </div>
                )
            })}
        </div>
    )
}

export default ColorLegend;

/*
<div style={{position: 'absolute', right: 60, top: 105}}>
    <div>
        <FlatButton style={{backgroundColor: "#607d8b", height: 15, minWidth: 15, marginRight: 5}}/>
    = Empty
    </div>
    <div>
        <FlatButton style={{backgroundColor: "#4caf50", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
    = Has room 
    </div>
    <div>
        <FlatButton style={{backgroundColor: "#ffc107", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
    = Full shift 
    </div>
    <div>
        <FlatButton style={{backgroundColor: "#f44336", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
    = Overscheduled 
    </div>
</div>
*/