/**
 * Created by Jeffr on 7/25/2017.
 */
import {connect} from 'react-redux'
import React, {Component} from 'react'


const Day = ({monday}) => {
    var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return (
        <div >
            <div>MONDAY</div>
            <div>
                <div>
                    1:
                </div>
                <div>
                    {monday.mon[1]}
                </div>
            </div>
        </div>
    )
}


export default connect(
    (state) => {
        return {
            monday: state.monReducer
        }
    })(Day)

