/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';

const CalendarHour = () => {
  return (
    <RaisedButton primary={true} />
  )
}

export default connect (
    (state) => {
        return {

        }
    }
)(CalendarHour)
