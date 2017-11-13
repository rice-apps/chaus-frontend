/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { save_changes } from '../actions/userActions'
// import { WReducer } from '../reducers/index'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android'

const combineDays = () => {
  weekObject = {"Monday":mon, "Tuesday":tues, "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
}

const ChangeButton = ({netid, save_changes, mon, tues, wed, thurs, fri, sat, sun}) => {
  let weekObject = {"Monday":mon, "Tuesday":tues, 
                    "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
  console.log(weekObject)
  return (
    <RaisedButton icon={<ActionAndroid />} onClick={() => save_changes(weekObject, netid)}/>
  )
}

export default connect(
    (state) => {
        return {
            mon: state.monReducer.mon,
            tues: state.tuesReducer.tues,
            wed: state.wedReducer.wed,
            thurs: state.thursReducer.thurs,
            fri: state.friReducer.fri,
            sat: state.satReducer.sat,
            sun: state.sunReducer.sun,
            netid: state.activeReducer.user.netid
        }
    },
    (dispatch) => {
        return {
            save_changes: (week, netid) => dispatch(save_changes(week, netid))
        }
    }
)(ChangeButton)
