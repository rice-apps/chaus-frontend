/**
 * Created by Will & Josh on 11/19/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {close_modal} from '../../actions/masterActions'
import ModalList from './modal-list'
//Material Imports
import Dialog from 'material-ui/Dialog';

const DayTitle = (dayname) => {
    switch(dayname) {
        case "U":
            return "Sunday"
        case "M":
            return "Monday"
        case "T":
            return "Tuesday"
        case "W":
            return "Wednesday"
        case "R":
            return "Thursday"
        case "F":
            return "Friday"
        case "S":
            return "Saturday"
    }
}

const CalModal = ({availability, schedule, open, close_modal, dayname, hour}) => {
    var modalTitle = DayTitle(dayname)
    var hourEnd = ((hour)%12==0 ? (12):((hour)%12))
    var hourStart = ((hourEnd - 1)==0 ? (12):(hourEnd - 1))
    var timeRange = (hourStart.toString() + ":55 - " + hourEnd.toString() + ":55" + ((hour) > 11 ? (" PM"):(" AM")))
    modalTitle += (", " + timeRange)
    return (
        <Dialog
            title={modalTitle}
            modal={false}
            open={open}
            onRequestClose={() => close_modal()}
        >
            <ModalList/>
        </Dialog>
    )
}

export default connect (
    (state) => {
        return {
            availability: state.mCal.activeShiftReducer.available,
            schedule: state.mCal.activeShiftReducer.schedule,
            open: state.mCal.activeShiftReducer.open,
            dayname: state.mCal.activeShiftReducer.dayname,
            hour: state.mCal.activeShiftReducer.hour
        }
    },
    (dispatch) => {
        return {
            close_modal: () => dispatch(close_modal())
        }
    }
)(CalModal)


