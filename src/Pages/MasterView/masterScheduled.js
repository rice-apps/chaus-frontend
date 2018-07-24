import React, { PureComponent } from 'react';
// Components
import UserButton from './userButton';
// SASS
import '../../css/masterPage.scss';

const MasterScheduled = ({ scheduled }) => {
    return (
        <div className="master-scheduled">
            <h4>Scheduled</h4>
            <React.Fragment>
            {scheduled.map((netid) => (
                <UserButton
                key={`${netid}-scheduled`}
                netid={netid}
                />
            ))}
            </React.Fragment>
        </div>
    )
}

export default MasterScheduled;