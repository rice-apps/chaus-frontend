/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { save_changes } from '../../actions/userActions'
// import { WReducer } from '../reducers/index'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import Save from 'material-ui/svg-icons/content/save'
import {fullWhite} from 'material-ui/styles/colors';

const combineDays = () => {
  weekObject = {"Monday":mon, "Tuesday":tues, "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
}

const ChangeButton = ({netid, save_changes, mon, tues, wed, thurs, fri, sat, sun}) => {
  let weekObject = {"Monday":mon, "Tuesday":tues,
                    "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
  return (

      <RaisedButton backgroundColor="#a4c639" icon={<Save color={fullWhite}/>} onClick={() => save_changes(weekObject, netid)} style={{height: 34}}/>
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
            netid: state.eCal.activeReducer.user.netid
        }
    },
    (dispatch) => {
        return {
            save_changes: (week, netid) => dispatch(save_changes(week, netid))
        }
    }
)(ChangeButton)
