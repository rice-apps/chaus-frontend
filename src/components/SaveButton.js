import React, { PureComponent } from 'react';
// Material UI
import { RaisedButton } from 'material-ui';
// SASS
// import '../../css/masterPage.scss';

const SaveButton = ({ saveMechanism, saving }) => {
    return (
        <RaisedButton
        label="Save"
        onClick={() => saveMechanism()}
        disabled={saving}
        />
    )
}

export default SaveButton;