import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI
// Components
import AvailabilityButton from './availabilityButton';
// GraphQL
// Actions
// Context
// SASS
import '../../css/masterPage.scss';

const MasterScheduled = ({ scheduled }) => {
    return (
        <div className="master-scheduled">
            <h4>Scheduled</h4>
            <React.Fragment>
            {scheduled.map((netid) => (
                <AvailabilityButton
                key={`${netid}-scheduled`}
                netid={netid}
                />
            ))}
            </React.Fragment>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            scheduled: state.mCal.newActiveShiftReducer.scheduled
        }
    },
    (dispatch) => {
        return {
        }
    }
)(MasterScheduled);