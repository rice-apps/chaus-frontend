import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Components
import MasterAvailabilities from './masterAvailabilities';
import MasterScheduled from './masterScheduled';
// Actions
import { setShiftId, sortAvailabilities, setScheduled, resetActiveShift, saveScheduled } from '../../actions/masterActions';
// SASS
import '../../css/masterPage.scss';

class MasterShiftDetailed extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            contextVals: props.contextVals
        };
    }

    // Necessary lifecycle methods
    componentWillMount() {
        // Renamed received value of availabilities to rawAvailabilities
        var { availabilities: rawAvailabilities, scheduled, shiftId } = this.state.contextVals;
        // Get action methods into more readable names
        const { sortAvailabilities, setScheduled, setShiftId } = this.props;
        // Setup active shift reducer
        setShiftId(shiftId);
        sortAvailabilities(rawAvailabilities);
        setScheduled(scheduled);
    }
    componentWillUnmount() {
        // Get action methods into more readable names
        var { resetActiveShift } = this.props;
        resetActiveShift();
    }
    render() {
        // Get state
        var { sortedAvailabilities, scheduled, saving } = this.props;
        // Get actions
        var { saveScheduled } = this.props;
        return (
            <div className="master-detailed">
                <MasterAvailabilities
                sortedAvailabilities={sortedAvailabilities}
                />
                <MasterScheduled 
                scheduled={scheduled}
                saveScheduled={saveScheduled}
                saving={saving}
                />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            sortedAvailabilities: state.mCal.newActiveShiftReducer.availabilities,
            scheduled: state.mCal.newActiveShiftReducer.scheduled,
            saving: state.mCal.newActiveShiftReducer.saving
        }
    },
    (dispatch) => {
        return {
            setShiftId: (shiftId) => dispatch(setShiftId(shiftId)),
            sortAvailabilities: (rawAvailabilities) => dispatch(sortAvailabilities(rawAvailabilities)),
            setScheduled: (scheduled) => dispatch(setScheduled(scheduled)),
            resetActiveShift: () => dispatch(resetActiveShift()),
            saveScheduled: () => dispatch(saveScheduled())
        }
    }
)(MasterShiftDetailed);