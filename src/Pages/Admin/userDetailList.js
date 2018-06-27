import React, {Component} from 'react';
// Component Imports
import UserDetailButton from './userDetailButton';
// MUI Imports

// GraphQL Imports
import { Mutation } from 'react-apollo';
import { SetUserHours, DeleteUser } from '../../graphql/mutations/admin.graphql';


// SASS
import '../../css/adminPage.scss';

const UserDetailList = ({ users }) => {
    return (
        <div>
            {users.map((user) => {
                return (
                    <Mutation mutation={SetUserHours}>
                        {(SetUserHours, { data } ) => (
                            <Mutation mutation={DeleteUser}>
                                {(DeleteUser, { data } ) => (
                                    <UserDetailButton 
                                    user={user}
                                    setUserHours={SetUserHours}
                                    deleteUser={DeleteUser} />
                                )}
                            </Mutation>
                        )}
                    </Mutation>
                )
            })}
        </div>
    )
};

export default UserDetailList;
