/**
 * Created by Will & Josh on 11/19/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {close_modal} from '../../actions/masterActions'
import ModalList from './modal-list'
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
            <ModalList/>
        </Dialog>
    )
}

export default connect (
    (state) => {
      return {
        debug: state,
        availability: state.mCal.activeShiftReducer.available,
        schedule: state.mCal.activeShiftReducer.schedule,
        open: state.mCal.activeShiftReducer.open
      }
    },
    (dispatch) => {
      return {
        close_modal: () => dispatch(close_modal())

      }
    }
)(CalModal)


