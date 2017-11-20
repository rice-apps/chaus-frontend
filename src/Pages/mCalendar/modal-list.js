/**
 * Created by Will & Josh on 11/19/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {close_modal, toggle_scheduled, save_shift} from '../../actions/masterActions'
//Material Imports
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Save from 'material-ui/svg-icons/content/save'
import {fullWhite} from 'material-ui/styles/colors';
const ModalList = ({availability, schedule, toggle_scheduled, save_shift, dayname, hour}) => {
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
                        <RaisedButton style={{}} key={netid} label={netid} primary={true} onClick={() => toggle_scheduled(netid)} />
                    )
                })}
            </GridTile>
            <GridTile>
                <RaisedButton backgroundColor="#a4c639" icon={<Save color={fullWhite}/>} onClick={() => save_shift(schedule, availability, dayname, hour)} />
            </GridTile>
        </GridList>
    )
}

export default connect (
    (state) => {
        return {
            availability: state.mCal.activeShiftReducer.available,
            schedule: state.mCal.activeShiftReducer.schedule,
            dayname: state.mCal.activeShiftReducer.dayname,
            hour: state.mCal.activeShiftReducer.hour        }
    },
    (dispatch) => {
        return {
            toggle_scheduled: (netid) => dispatch(toggle_scheduled(netid)),
            save_shift: (schedule, availability, weekday, hour) => dispatch(save_shift(schedule, availability, weekday, hour))
        }
    }
)(ModalList)


