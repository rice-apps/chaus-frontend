import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI

// Components
import AvailabilityButton from './availabilityButton';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';
// Actions
import { sortAvailabilities } from '../../actions/masterActions';
// Context
import { MasterShiftContext } from './masterContext';
// SASS
import '../../css/masterPage.scss';

class MasterAvailabilities extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rawAvailabilities: props.rawAvailabilities
        };
    }
    
    // Necessary lifecycle method
    componentWillMount() {
        // Sorts availabilities before mount
        const { sortAvailabilities } = this.props;
        sortAvailabilities(this.state.rawAvailabilities);
    }

    render() {
        // From reducer
        var { sortedAvailabilities } = this.props;
        return (
            <div className="master-availabilities">
                {Object.keys(sortedAvailabilities).map((priorityKey) => {
                    var netids = sortedAvailabilities[priorityKey].map((availabilityObject) => {
                        return availabilityObject.netid;
                    })
                    console.log(netids);
                    return (
                        <React.Fragment>
                            <h4>{priorityKey}</h4>
                            {netids.map((netid) => (
                                <AvailabilityButton netid={netid} />
                            ))}
                        </React.Fragment>
                    );
                })}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            sortedAvailabilities: state.mCal.newActiveShiftReducer.availabilities
        }
    },
    (dispatch) => {
        return {
            sortAvailabilities: (availabilities) => dispatch(sortAvailabilities(availabilities))
        }
    }
)(MasterAvailabilities);