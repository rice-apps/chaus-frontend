import React, {Component} from 'react'
import {connect} from 'react-redux'
import {get_scheduled} from '../../actions/employeeActions'
import RaisedButton from 'material-ui/RaisedButton'

const processedShifts = (dayArr) => {
    let first = -1
    for (let i = 0; i<dayArr.length; i++) {
        if (dayArr[i] == true) {
            first = i
            break
        }
    }
    if (first == -1){
        return ''
    }

    let p1 = first
    let p2 = first + 1
    let shiftString = ""

    let prev = first - 1

    while (p1 < dayArr.length && p2 < dayArr.length) {
        console.log(p2)
        if (dayArr[p2] == true) {
            if (p1 < prev){
                p1 = p2
            }
            p2 += 1
        } else {
            if (p1 != -1) {
                let t1 = p1 + 6
                let t2 = p2 + 6
                shiftString += t1.toString() +":55 to " + t2.toString() + ":55, ";
                prev = p2 - 1            
                p1 = -1
            }

            p2 += 1
        }
    }

    return shiftString.slice(0, shiftString.length - 2)
}

const GenerateSchedule = ({activeUser, activeSchedule, get_scheduled}) => {
    return (
        <div style={{padding: '1em'}}>
            <h2>{activeUser.firstName + " " + activeUser.lastName + "'s Schedule"}</h2>

            {Object.keys(activeSchedule).map((key) => {
                var shiftString = processedShifts(activeSchedule[key])
                return (
                    <p>{key}: {shiftString}</p>
                )
            })}
            <h3>Ideal Hours: {activeUser.idealHours}</h3>
            <h3>Max Hours: {activeUser.maxHour}</h3>
            
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
        }
    }
)(GenerateSchedule)
