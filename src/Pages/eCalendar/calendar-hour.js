/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { toggle_availability } from '../../actions/employeeActions'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import ChangeButton from './/changes-button'

const changeColor = (preference) => {
  switch(preference) {
    case 0:
      // from material-ui color tool, 5th line of 'blue grey'
      return "#607d8b"
    case 1:
      // from material-ui color tool, 5th line of 'green'
      return "#4caf50"
    case 2:
      // from material-ui color tool, 5th line of 'yellow'
      return "#ffeb3b"
    case 3:
      // from material-ui color tool, 5th line of 'amber'
      return "#ffc107"
    case 4:
      // from material-ui color tool, 5th line of 'red'
      return "#f44336"
    default:
      // from material-ui color tool, 5th line of 'blue grey'
      return "#607d8b"
  }
}

const changeColor2 = (preference) => {
  // If we want to stick to a single color scheme
  switch (preference) {
    case 1:
      return "#2196f3"
    case 2:
      return "#64b5f6"
    case 3:
      return "#bbdefb" // light blue
    case 4:
      return "#f44336" // red
    default:
      return "#607d8b"
  }
}

const CalendarHour = ({dayname, hour, toggle_availability}) => {
  console.log(hour)
  return (
      <div style={{height: 34, display: 'flex', justifyContent: 'center'}}>
          {dayname == 'S' && hour.hour== '24' ? <ChangeButton/> : <RaisedButton backgroundColor={changeColor2(hour.available)} disabled={hour.closed} style={{height:34}}
          onClick={() => toggle_availability(dayname, hour.hour, hour.available)}/>}
    </div>
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
)(CalendarHour)
