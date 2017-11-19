/**
 * Created by Will & Josh on 11/19/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {close_modal, toggle_scheduled} from '../../actions/masterActions'
//Material Imports
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';

const ModalList = ({availability, schedule, toggle_scheduled}) => {
    console.log(typeof(schedule), typeof(availability))
    return (
      <GridList
        cols={2}
        >
        <GridTile>
          <h1>Available</h1>
          {availability.map((netid) => {
            return (
              <RaisedButton key={netid} label={netid} primary={true} onClick={() => toggle_scheduled(netid)} />
            )
          })}
        </GridTile>
        <GridTile>
          <h1>Scheduled</h1>
          {schedule.map((netid) => {
            return (
              <RaisedButton key={netid} label={netid} primary={true} onClick={() => toggle_scheduled(netid)} />
            )
          })}
        </GridTile>
        </GridList>
    )
}

export default connect (
    (state) => {
      return {
        availability: state.mCal.activeShiftReducer.available,
        schedule: state.mCal.activeShiftReducer.schedule,
      }
    },
    (dispatch) => {
      return {
        toggle_scheduled: (netid) => dispatch(toggle_scheduled(netid))
      }
    }
)(ModalList)


