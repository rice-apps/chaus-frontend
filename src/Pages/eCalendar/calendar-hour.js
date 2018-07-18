/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { toggle_availability } from '../../actions/employeeActions'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import ChangeButton from './/changes-button'
import PreferenceSelect from './preferenceSelect';

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
      return "#5fa55a" // green
    case 2:
      return "#f6d51f" // yellow
    case 3:
      return "#fa8925" // orange
    case 4:
      return "#fa5457" // red
    default:
      return "#01b4bc" // blue
  }
}

// const setButton = (dayname, hour) => {
//   if (dayname == 'S' && hour.hour == '24') {
//     return (
//       <ChangeButton />
//     )
//   }
//   return (<PreferenceSelect dayname={dayname} hour={hour} style={{height: 34}} />)
// }

const CalendarHour = ({dayname, hour}) => {
  return (
    <div style={{height: 34, display: 'flex', justifyContent: 'center'}}>
      {setButton(dayname, hour)}
    </div>
  )
}

export default CalendarHour;
