import React, {Component} from 'react'
import {connect} from 'react-redux'
import {get_schedule} from '../../actions/userActions'
import RaisedButton from 'material-ui/RaisedButton'

const processedShifts = (shiftArr) => {

    var shiftString = ''
    if (shiftArr[0]) {
        shiftString = (shiftArr[0]-1) + ":55 to "
        for (var i = 0; i<shiftArr.length-1; i++)
        {
            if (shiftArr[i+1] != (shiftArr[i]+1))
            {
                shiftString += shiftArr[i].toString()+":55, "
                shiftString += (shiftArr[i+1]-1).toString()+":55 to "
            }
        };
        shiftString += (shiftArr[shiftArr.length-1]).toString()+":55";
    }
    return shiftString
}

const GenerateSchedule = ({activeUser, activeSchedule, get_schedule}) => {
    return (
        <div style={{padding: '1em'}}>

            {/*<RaisedButton label={activeUser.netid+"'s Schedule"}*/}
                          {/*primary = {typeof(activeUser.netid) !== "undefined"}*/}
                          {/*disabled = {typeof(activeUser.netid) === "undefined"}*/}
                          {/*onClick={() => get_schedule(activeUser.netid)} />*/}
            <h2>{activeUser.firstName + " " + activeUser.lastName+"'s Schedule"} </h2>
            {Object.keys(activeSchedule).map((key) => {
                var shiftString = processedShifts(activeSchedule[key])
                return (
                    <p>{key}: {shiftString}</p>
                )
            })}
        </div>
    )
}




export default connect(
    (state) => {
        return {
            activeUser: state.eCal.activeReducer.user,
            activeSchedule : state.eCal.activeReducer.schedule
        }
    },
    (dispatch) => {
        return {
            get_schedule: (user) => dispatch(get_schedule(user))
        }
    }
)(GenerateSchedule)