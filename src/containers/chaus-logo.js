/**
 * Created by Josh on 11/15/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { toggle_availability } from '../actions/userActions'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import ChangeButton from '../containers/changes-button'

const CalendarHour = ({dayname, hour, toggle_availability}) => {
  return (
      <div style={{position: 'fixed', bottom: 10, right: 20}}>
          <img src={"http://riceapps.org/images/logo-02.png"} height={40} />
      </div>
  )
}

export default connect (
    (state) => {

    }
)(CalendarHour)
