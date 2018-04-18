/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { open_modal } from '../../actions/masterActions'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';

const getButtonColor = (total) => {

  switch(total) {
    case 0:
      // from material-ui color tool, 5th line of 'blue grey'
      return "#607d8b"
    case 1:
      // from material-ui color tool, 5th line of 'green'
      return "#4caf50"
    case 2:
      // from material-ui color tool, 5th line of 'green'
      return "#4caf50"
    case 3:
      // from material-ui color tool, 5th line of 'amber'
      return "#ffc107"
    default:
      // from material-ui color tool, 5th line of 'red'
      return "#f44336"
  }
}

const CalendarHour = ({dayname, hour, total, open_modal}) => {

  return (
      <div style={{height: 34, display: 'flex', justifyContent: 'center'}}>
          <RaisedButton backgroundColor={getButtonColor(total)}
                        disabled={hour.closed}
                        style={{height:34}}
                        onClick={() => open_modal(dayname, hour)}/>
    </div>
  )
}

export default connect (
    (state) => {
      return {
      }
    },
    (dispatch) => {
        return {
            open_modal: (dayname, hour) => dispatch(open_modal(dayname, hour)),
        }
    }
)(CalendarHour)
