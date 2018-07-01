import React, {Component} from 'react';
// Component Imports
import UserDetailButton from './userDetailButton';
// MUI Imports

// GraphQL Imports
import { Mutation } from 'react-apollo';
// import { SetUserHours, DeleteUser } from '../../graphql/mutations/admin.graphql';


// SASS
import '../../css/adminPage.scss';

const UserDetailList = ({ users, SetUserHours, DeleteUser, AllUsersDetail }) => {
    return (
        <div>
            {users.map((user) => {
                console.log(user.netid);
                return (
                    <UserDetailButton 
                    user={user}
                    key={user.id}
                    SetUserHours={SetUserHours}
                    DeleteUser={DeleteUser}
                    AllUsersDetail={AllUsersDetail} />
                )
            })}
        </div>
    )
};

export default UserDetailList;
