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