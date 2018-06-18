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

const getButtonColor = (user, totals) => {
    // Determine if employee is underscheduled, within hour range,
    // at max hours, or overscheduled, and return respective button color
    //console.log("DEBUG 1: ", JSON.stringify(totals))
    //console.log("DEBUG 2:", user)
    //onsole.log("DEBUG 3:", totals.user)
    var total = totals[user].total
    var max = totals[user].max
    var min = totals[user].min
    var color = ((total > max) ?
                    4:
                    ((total == max) ?
                        3:
                        ((total >= min) ?
                            2:1)))

    //var color = 10;
  switch(color) {
    case 1:
      // from material-ui color tool, 5th line of 'blue grey'
      return "#607d8b"
    case 2:
      // from material-ui color tool, 5th line of 'green'
      return "#4caf50"
    case 3:
      // from material-ui color tool, 5th line of 'amber'
      return "#ffc107"
    case 4:
      // from material-ui color tool, 5th line of 'red'
      return "#f44336"
    default:
      // from material-ui color tool, 5th line of 'blue grey'
      return "#607d8b"
  }
}

const getName = (netid, users) => {
    var person = users.find( (user) => {return user.netid == netid})
    return person.firstName + " " + person.lastName[0]
}

const styles = {
    topGrid: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20
    },
    availGrid: {
        flex:4
    },
    schedGrid: {
        flex:1
    }
}

const ModalList = ({p1, p2, p3, p4, schedule, toggle_scheduled, save_shift, dayname, hour, userHours, users, activeUserRole}) => {
    console.log("MODAL CALLED")

    // Change 'allowedShifts' to reflect max capacity of each shift (default 3 right now)
    var allowedShifts = 3

    // console.log(p1, p2, p3, p4, schedule, toggle_scheduled, save_shift, dayname, hour, userHours)
    return (
        <div>
            <div style={{borderLeft: '2px solid', height: 600, position: 'absolute', marginLeft: '46.5%'}}/>
            <GridList
                cols={2}
                cellHeight={700}
                padding={12}
                style={styles.topGrid}
            >
                <GridTile
                    style={styles.availGrid}
                >
                    <GridList
                        cols={1}
                        cellHeight={150}
                    >
                        <GridTile>
                            <h1>Priority 1 (Preferred)</h1>
                            {p1.map((netid) => {
                                if (netid != "undefined") {
                                    return (
                                        <RaisedButton
                                            style={{margin: 2}} 
                                            key={netid} 
                                            label={getName(netid, users)} 
                                            backgroundColor={getButtonColor(netid, userHours)} 
                                            onClick={() => toggle_scheduled(netid)} />
                                    )
                                }
                            })}
                        </GridTile>
                        <GridTile>
                            <h1>Priority 2 (Available)</h1>
                            {p2.map((netid) => {
                                if (netid != "undefined") {
                                    return (
                                        <RaisedButton
                                            style={{margin: 2}} 
                                            key={netid} 
                                            label={getName(netid, users)} 
                                            backgroundColor={getButtonColor(netid, userHours)} 
                                            onClick={() => toggle_scheduled(netid)} />
                                    )
                                }
                            })}
                        </GridTile>
                        <GridTile>
                            <h1>Priority 3 (Not Preferred)</h1>
                            {p3.map((netid) => {
                                if (netid != "undefined") {
                                    return (
                                        <RaisedButton
                                            style={{margin: 2}} 
                                            key={netid} 
                                            label={getName(netid, users)} 
                                            backgroundColor={getButtonColor(netid, userHours)} 
                                            onClick={() => toggle_scheduled(netid)} />
                                    )
                                }
                            })}
                        </GridTile>
                        <GridTile>
                            <h1>Priority 4 (Unavailable)</h1>
                            {p4.map((netid) => {
                                if (netid != "undefined") {
                                    return (
                                        <RaisedButton
                                            style={{margin: 2}} 
                                            key={netid} 
                                            label={getName(netid, users)} 
                                            backgroundColor={getButtonColor(netid, userHours)} 
                                            onClick={() => toggle_scheduled(netid)} />
                                    )
                                }
                            })}
                        </GridTile>
                    </GridList>
                </GridTile>
                <GridTile
                    style={styles.schedGrid}
                >
                    <GridList
                        cols={1}
                        cellHeight={560}
                    >
                        <GridTile>
                            <h1>Scheduled</h1>
                            {schedule.length < allowedShifts ?
                                <div>{allowedShifts - schedule.length == 1?
                                    <div>1 spot left</div>:
                                    <div>{allowedShifts - schedule.length} spots left</div>}
                                </div>:
                                <div>{schedule.length > allowedShifts ?
                                    <div>{schedule.length - allowedShifts == 1?
                                        <div>Overfilled by 1 spot</div>:
                                        <div>Overfilled by {schedule.length - allowedShifts} spots</div>} </div>:
                                    <div>Shift filled</div>}</div>}
                            {schedule.map((netid) => {
                                return (
                                    <RaisedButton style={{margin: 2}} key={netid} label={getName(netid, users)} backgroundColor={getButtonColor(netid, userHours)} onClick={() => toggle_scheduled(netid)} />
                                )
                            })}
                        </GridTile>
                        <GridTile>
                            <div style={{display: 'flex'}}>
                                <span style={{flex:1}}/>
                                {activeUserRole == 'admin'
                                ? <RaisedButton backgroundColor="#a4c639" icon={<Save color={fullWhite}/>} onClick={() => save_shift(schedule, p1, p2, p3, p4, dayname, hour)} />
                                : <div />}
                                
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
            userHours: state.mCal.activeShiftReducer.userHours,
            users: state.eCal.userReducer.users,
            activeUserRole: state.auth.activeUserReducer.role
        }
    },
    (dispatch) => {
        return {
            toggle_scheduled: (netid) => dispatch(toggle_scheduled(netid)),
            save_shift: (schedule, p1, p2, p3, p4, weekday, hour) => dispatch(save_shift(schedule, p1, p2, p3, p4, weekday, hour))
        }
    }
)(ModalList)
