/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
// import { save_changes } from '../../actions/userActions'
import { save_availability } from '../../actions/employeeActions'
// import { WReducer } from '../reducers/index'
//Material Imports
import { Button } from '@material-ui/core';
import Save from '@material-ui/icons/Save'
// import {fullWhite} from '@material-ui/core/styles/colors';

const combineDays = () => {
  weekObject = {"Monday":mon, "Tuesday":tues, "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
}

const ChangeButton = ({netid, save_availability, hoursFilled, mon, tues, wed, thurs, fri, sat, sun}) => {
  let weekObject = {"Monday":mon, "Tuesday":tues,
                    "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
  return (
      <Button variant="Raised" backgroundColor="#a4c639" icon={<Save />} onClick={() => save_availability(netid, weekObject)} style={{height: 34}}/>
  )
}

export default connect(
    (state) => {
        return {
            mon: state.eCal.scheduleReducer.schedule.M,
            tues: state.eCal.scheduleReducer.schedule.T,
            wed: state.eCal.scheduleReducer.schedule.W,
            thurs: state.eCal.scheduleReducer.schedule.R,
            fri: state.eCal.scheduleReducer.schedule.F,
            sat: state.eCal.scheduleReducer.schedule.S,
            sun: state.eCal.scheduleReducer.schedule.U,
            hoursFilled: state.eCal.scheduleReducer.hoursFilled,
            netid: state.eCal.activeReducer.user.netid
        }
    },
    (dispatch) => {
        return {
            save_availability: (netid, shifts) => dispatch(save_availability(netid, shifts))
        }
    }
)(ChangeButton)
