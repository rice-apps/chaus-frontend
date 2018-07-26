import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI
import { RaisedButton } from 'material-ui';
// Components
// Actions
import { updateScheduled } from '../../actions/masterActions';
// Context

const UserButton = ({ user, updateScheduled }) => {
    var { netid } = user;
    return (
        <RaisedButton
        label={netid}
        className="master-userbutton"
        onClick={() => updateScheduled(user)}
        />
    )
}

export default connect(
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            updateScheduled: (netid) => dispatch(updateScheduled(netid))
        }
    }
)(UserButton);