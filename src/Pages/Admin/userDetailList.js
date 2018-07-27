import React, {Component} from 'react';
// Component Imports
import UserDetailButton from './userDetailButton';
// MUI Imports

// GraphQL Imports
import { Mutation } from 'react-apollo';
// import { SetUserHours, DeleteUser } from '../../graphql/mutations/admin.graphql';


const UserDetailList = ({ users, SetUserHours, DeleteUser, AllUsersDetail }) => {
    return (
        <React.Fragment>
            {users.map((user) => {
                return (
                    <UserDetailButton 
                    user={user}
                    key={user.id}
                    SetUserHours={SetUserHours}
                    DeleteUser={DeleteUser}
                    AllUsersDetail={AllUsersDetail} />
                )
            })}
        </React.Fragment>
    )
};

export default UserDetailList;
