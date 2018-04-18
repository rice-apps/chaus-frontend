/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { open_modal } from '../../actions/masterActions'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';

const CalendarHour = ({dayname, hour, total, open_modal}) => {

  return (
      <div style={{height: 34, display: 'flex', justifyContent: 'center'}}>
          <RaisedButton primary={total}
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
