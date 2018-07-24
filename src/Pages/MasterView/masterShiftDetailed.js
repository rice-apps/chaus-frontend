import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Components
import MasterAvailabilities from './masterAvailabilities';
import MasterScheduled from './masterScheduled';
// Actions
import { sortAvailabilities, setScheduled, resetActiveShift } from '../../actions/masterActions';
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
        var { availabilities: rawAvailabilities, scheduled } = this.state.contextVals;
        // Get action methods into more readable names
        const { sortAvailabilities, setScheduled } = this.props;
        // Setup active shift reducer
        sortAvailabilities(rawAvailabilities);
        setScheduled(scheduled);
    }
    componentWillUnmount() {
        // Get action methods into more readable names
        var { resetActiveShift } = this.props;
        resetActiveShift();
    }
    render() {
        var { sortedAvailabilities, scheduled } = this.props;
        return (
            <div className="master-detailed">
                <MasterAvailabilities
                sortedAvailabilities={sortedAvailabilities}
                />
                <MasterScheduled 
                scheduled={scheduled}
                />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            sortedAvailabilities: state.mCal.newActiveShiftReducer.availabilities,
            scheduled: state.mCal.newActiveShiftReducer.scheduled
        }
    },
    (dispatch) => {
        return {
            sortAvailabilities: (rawAvailabilities) => dispatch(sortAvailabilities(rawAvailabilities)),
            setScheduled: (scheduled) => dispatch(setScheduled(scheduled)),
            resetActiveShift: () => dispatch(resetActiveShift())
        }
    }
)(MasterShiftDetailed);