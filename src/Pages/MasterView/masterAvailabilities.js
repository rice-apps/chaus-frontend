import React, { PureComponent } from 'react';
// Components
import UserButton from './userButton';
// SASS
import '../../css/masterPage.scss';

const MasterAvailabilities = ({ sortedAvailabilities }) => (
    <div className="master-availabilities">
        {Object.keys(sortedAvailabilities).map((priorityKey) => {
            var netids = sortedAvailabilities[priorityKey].map((availabilityObject) => {
                return availabilityObject.netid;
            })
            return (
                <React.Fragment key={priorityKey}>
                    <h4>{priorityKey}</h4>
                    {netids.map((netid) => (
                        <UserButton 
                        key={`${netid}-available`}
                        netid={netid} 
                        />
                    ))}
                </React.Fragment>
            );
        })}
    </div>
)

export default MasterAvailabilities;