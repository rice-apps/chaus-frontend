/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';

const CalendarHour = ({dayName, hour}) => {
  return (
    <RaisedButton primary={hour.available} secondary={!hour.available} disabled={hour.closed}  style={{height: 80}} />

  )
}

export default connect (
    (state) => {
        return {

        }
    }
)(CalendarHour)
