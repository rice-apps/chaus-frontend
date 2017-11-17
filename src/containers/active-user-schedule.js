import React, {Component} from 'react'
import {connect} from 'react-redux'
import {get_schedule} from '../actions/userActions'



const GenerateSchedule = ({activeUser, activeSchedule, get_schedule}) => {
    return (
        <div>
            <button onClick={() => get_schedule(activeUser.netid)}>GENERATE SCHEDULE</button>
            {Object.keys(activeSchedule).map((key) => {
                return (
                    <p>{key}: {activeSchedule[key].join(', ')}</p>
                )
            })}
        </div>
    )
}




export default connect(
    (state) => {
        return {
            activeUser: state.activeReducer.user,
            activeSchedule : state.activeReducer.schedule
        }
    },
    (dispatch) => {
        return {
            get_schedule: (user) => dispatch(get_schedule(user))
        }
    }
)(GenerateSchedule)