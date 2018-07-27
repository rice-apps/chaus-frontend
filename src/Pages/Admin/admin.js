import React, {Component} from 'react'
// Components
import AddUser from './addUser';
import UserDetailDisplay from './userDetailDisplay';
import UserDetailList from './userDetailList';
import Sidebar from '../sidebar';
// GraphQL
import { graphql, compose } from 'react-apollo';
import { AllUsersDetail } from '../../graphql/queries/allUsers.graphql';
import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/adminPage.scss';

const AdminPage = ({ data: { users = [] }, SetUserHours, DeleteUser, CreateUser }) => {
    return (
        <div>
            <Sidebar />
            <div className="admin-container">
                <div className="admin-add">
                    <h1>Add User</h1>
                    <AddUser
                    CreateUser={CreateUser}
                    AllUsersDetail={AllUsersDetail} />
                    <div className="user-detail-display">
                    <UserDetailDisplay />
                    </div>
                </div>
                <div className="admin-list">
                    <h1>Users</h1>
                    <UserDetailList 
                    users={users}
                    SetUserHours={SetUserHours}
                    DeleteUser={DeleteUser}
                    AllUsersDetail={AllUsersDetail} />
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(AllUsersDetail),
    graphql(SetUserHours, { name: 'SetUserHours' }),
    graphql(DeleteUser, { name: 'DeleteUser' }),
    graphql(CreateUser, { name: 'CreateUser' }),
)(AdminPage)