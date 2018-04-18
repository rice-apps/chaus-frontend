/**
 * Created by Will & Josh on 11/19/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {close_modal} from '../../actions/masterActions'
import ModalList from './modal-list'
//Material Imports
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const DayTitle = (dayname) => {
    switch(dayname) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}

const customContentStyle = {
    width: '95%',
    maxWidth:'none',
};

const CalModal = ({open, close_modal, dayname, hour}) => {
    var hour = Number(hour)+7
    console.log("hour:",hour)
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
            contentStyle = {customContentStyle}
        >
            <div style={{position: 'absolute', right: 20, top: 15}}>
                <div>
                    <FlatButton style={{backgroundColor: "#607d8b", height: 15, minWidth: 15, marginRight: 5}}/>
                   = Underscheduled
                </div>
                <div>
                    <FlatButton style={{backgroundColor: "#4caf50", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                   = In hour range 
                </div>
                <div>
                    <FlatButton style={{backgroundColor: "#ffc107", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                   = At max hours 
                </div>
                <div>
                    <FlatButton style={{backgroundColor: "#f44336", height: 15, minWidth: 15, marginTop: '-4.5px', marginRight: 5}}/>
                   = Overscheduled 
                </div>
            </div>
            <ModalList/>
        </Dialog>
    )
}

export default connect (
    (state) => {
        return {
            //availability: state.mCal.activeShiftReducer.available,
            //schedule: state.mCal.activeShiftReducer.schedule,
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


