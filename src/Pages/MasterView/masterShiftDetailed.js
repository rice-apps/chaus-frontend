import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI

// Components
import MasterAvailabilities from './masterAvailabilities';
import MasterScheduled from './masterScheduled';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';
// Actions
// Context
import { MasterShiftContext } from './masterContext';
// SASS
import '../../css/masterPage.scss';

const MasterShiftDetailed = ({ contextVals }) => {
    return (
        <div className="master-detailed">
            <MasterAvailabilities
            rawAvailabilities={contextVals.availabilities} 
            />
            <MasterScheduled 
            scheduled={contextVals.scheduled}
            />
        </div>
    )
}

export default connect(
    (state) => {
        return {

        }
    },
    (dispatch) => {
        return {

        }
    }
)(MasterShiftDetailed);