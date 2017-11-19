/**
 * Created by Will & Josh on 11/19/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {close_modal} from '../../actions/masterActions'
//Material Imports
import Dialog from 'material-ui/Dialog';

const CalModal = ({availability, schedule, open, close_modal, debug}) => {
    console.log(availability, schedule, open, close_modal)
    console.log("DEBUG: ", debug)
    return (
        <Dialog
            title='TITLE'
            modal={false}
            open={open}
            onRequestClose={() => close_modal()}
        >
            {availability}
            {schedule}
        </Dialog>
    )
}

export default connect(
    (state) => {
        debug: state
        availability: state.activeShiftReducer.available
        schedule: state.activeShiftReducer.schedule
        open: state.activeShiftReducer.open
    },
    (dispatch) => {
        close_modal: () => dispatch(close_modal())
    }
)(CalModal)


