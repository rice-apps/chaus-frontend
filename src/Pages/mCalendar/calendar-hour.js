/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import ChangeButton from './/changes-button'

const CalendarHour = ({dayname, hour}) => {
  return (
      <div style={{height: 34, display: 'flex', justifyContent: 'center'}}>
          {dayname == 'S' && hour.hour== '24' ? <ChangeButton/> : <RaisedButton primary={hour.available} secondary={!hour.available} disabled={hour.closed} style={{height:34}}/>}
    </div>
  )
}

export default connect (
    (state) => {
      return {}
    },
    (dispatch) => {
        return {
        }
    }
)(CalendarHour)
