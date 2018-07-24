import React, { PureComponent } from 'react';
// Components
import UserButton from './userButton';
// SASS
import '../../css/masterPage.scss';

const MasterAvailabilities = ({ sortedAvailabilities }) => (
    <div className="master-availabilities">
        {Object.keys(sortedAvailabilities).map((priorityKey) => {
            var users = sortedAvailabilities[priorityKey].map((user) => {
                return user;
            });
            return (
                <React.Fragment key={priorityKey}>
                    <h4>{priorityKey}</h4>
                    {users.map((user) => (
                        <UserButton 
                        key={`${user.netid}-available`}
                        user={user} 
                        />
                    ))}
                </React.Fragment>
            );
        })}
    </div>
)

export default MasterAvailabilities;