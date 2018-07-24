import React, { PureComponent } from 'react';
// Components
import UserButton from './userButton';
import SaveButton from '../../components/SaveButton';
// SASS
import '../../css/masterPage.scss';

const MasterScheduled = ({ scheduled, saving, saveScheduled }) => {
    return (
        <div className="master-scheduled">
            <h4>Scheduled</h4>
            <React.Fragment>
            {scheduled.map((user) => (
                <UserButton
                key={`${user.netid}-scheduled`}
                user={user}
                />
            ))}
            </React.Fragment>
            <br />
            <SaveButton
            saveMechanism={saveScheduled}
            saving={saving}
            />
        </div>
    )
}

export default MasterScheduled;