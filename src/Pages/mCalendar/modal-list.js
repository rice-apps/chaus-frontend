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
const ModalList = ({p1, p2, p3, p4, schedule, toggle_scheduled, save_shift, dayname, hour}) => {
    console.log(p1, p2, p3, p4, schedule, toggle_scheduled, save_shift, dayname, hour)
    return (
        <div>
            <div style={{borderLeft: '2px solid', height: 600, position: 'absolute', marginLeft: '46.5%'}}/>
            <GridList
                cols={2}
                cellHeight={700}
                padding={12}
            >
                <GridTile>
                    <GridList
                        cols={1}
                        cellHeight={150}
                    >
                        <GridTile>
                            <h1>Priority 1 (Preferred)</h1>
                            {p1.map((netid) => {
                                return (
                                    <RaisedButton style={{margin: 2}} key={netid} label={netid} primary={true} onClick={() => toggle_scheduled(netid)} />
                                )
                            })}
                        </GridTile>
                        <GridTile>
                            <h1>Priority 2 (Available)</h1>
                            {p2.map((netid) => {
                                return (
                                    <RaisedButton style={{margin: 2}} key={netid} label={netid} primary={true} onClick={() => toggle_scheduled(netid)} />
                                )
                            })}
                        </GridTile>
                        <GridTile>
                            <h1>Priority 3 (Not Preferred)</h1>
                            {p3.map((netid) => {
                                return (
                                    <RaisedButton style={{margin: 2}} key={netid} label={netid} primary={true} onClick={() => toggle_scheduled(netid)} />
                                )
                            })}
                        </GridTile>
                        <GridTile>
                            <h1>Priority 4 (Unavailable)</h1>
                            {p4.map((netid) => {
                                return (
                                    <RaisedButton style={{margin: 2}} key={netid} label={netid} primary={true} onClick={() => toggle_scheduled(netid)} />
                                )
                            })}
                        </GridTile>
                    </GridList>
                </GridTile>
                <GridTile>
                    <GridList
                        cols={1}
                        cellHeight={560}
                    >
                        <GridTile>
                            <h1>Scheduled</h1>
                            {schedule.map((netid) => {
                                return (
                                    <RaisedButton style={{margin: 2}} key={netid} label={netid} primary={true} onClick={() => toggle_scheduled(netid)} />
                                )
                            })}
                        </GridTile>
                        <GridTile>
                            <div style={{display: 'flex'}}>
                                <span style={{flex:1}}/>
                                <RaisedButton backgroundColor="#a4c639" icon={<Save color={fullWhite}/>} onClick={() => save_shift(schedule, p1, p2, p3, p4, dayname, hour)} />
                            </div>
                        </GridTile>
                    </GridList>
                </GridTile>
            </GridList>
        </div>
    )
}

export default connect (
    (state) => {
        return {
            p1: state.mCal.activeShiftReducer.p1,
            p2: state.mCal.activeShiftReducer.p2,
            p3: state.mCal.activeShiftReducer.p3,
            p4: state.mCal.activeShiftReducer.p4,
            schedule: state.mCal.activeShiftReducer.schedule,
            dayname: state.mCal.activeShiftReducer.dayname,
            hour: state.mCal.activeShiftReducer.hour,
            userHours: state.mCal.activeShiftReducer.userHours}
    },
    (dispatch) => {
        return {
            toggle_scheduled: (netid) => dispatch(toggle_scheduled(netid)),
            save_shift: (schedule, p1, p2, p3, p4, weekday, hour) => dispatch(save_shift(schedule, p1, p2, p3, p4, weekday, hour))
        }
    }
)(ModalList)


