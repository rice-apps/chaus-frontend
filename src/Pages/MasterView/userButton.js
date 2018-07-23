import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI
// Components
// GraphQL
// Actions
import { updateScheduled } from '../../actions/masterActions';
// Context
// SASS
import '../../css/masterPage.scss';
import { RaisedButton } from 'material-ui';

const UserButton = ({ netid, updateScheduled }) => {
    return (
        <RaisedButton
        label={netid}
        style={{ margin: '5px' }}
        onClick={() => updateScheduled(netid)}
        />
    )
}

export default connect(
    (state) => {
        return {
            
        }
    },
    (dispatch) => {
        return {
            updateScheduled: (netid) => dispatch(updateScheduled(netid))
        }
    }
)(UserButton);