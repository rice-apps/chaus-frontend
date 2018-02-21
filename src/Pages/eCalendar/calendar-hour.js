/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { toggle_availability } from '../../actions/userActions'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import ChangeButton from './/changes-button'

const changeColor = (preference) => {
  switch(preference) {
    case 0:
      return "grey"
    case 1:
      return "green"
    case 2:
      return "yellow"
    case 3:
      return "orange"
    case 4:
      return "red"
    default:
      return "black"
  }
}

const CalendarHour = ({dayname, hour, toggle_availability}) => {
  return (
      <div style={{height: 34, display: 'flex', justifyContent: 'center'}}>
          {dayname == 'S' && hour.hour== '24' ? <ChangeButton/> : <RaisedButton backgroundColor={changeColor(hour.available)} disabled={hour.closed} style={{height:34}}
          onClick={() => toggle_availability(dayname, hour.hour, hour.available, hour.changed)}/>}
    </div>
  )
}

export default connect (
    (state) => {
      return {}
    },
    (dispatch) => {
        return {
          toggle_availability: (dayname, hour, availability, changed) => dispatch(toggle_availability(dayname, hour, availability, changed))
        }
    }
)(CalendarHour)
