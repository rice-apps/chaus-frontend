/**
 * Created by Will & Josh on 11/19/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {close_modal} from '../../actions/masterActions'
import ModalList from './modal-list'
//Material Imports
import Dialog from 'material-ui/Dialog';

const CalModal = ({availability, schedule, open, close_modal, dayname, hour}) => {
    var modalTitle = dayname
    modalTitle += hour
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


