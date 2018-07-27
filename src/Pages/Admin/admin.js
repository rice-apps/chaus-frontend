import React, {Component} from 'react'
// Components
import AddUser from './addUser';
import UserDetailList from './userDetailList';
// GraphQL
import { graphql, compose } from 'react-apollo';
import { AllUsersDetail } from '../../graphql/queries/allUsers.graphql';
import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/adminPage.scss';

const AdminPage = ({ data: { users = [] }, SetUserHours, DeleteUser, CreateUser }) => {
    return (
        <div className="main-container">
            <div className="user-add">
                <AddUser
                    CreateUser={CreateUser}
                    AllUsersDetail={AllUsersDetail} />
            </div>
            <div className="user-list">
                <UserDetailList 
                users={users}
                SetUserHours={SetUserHours}
                DeleteUser={DeleteUser}
                AllUsersDetail={AllUsersDetail} />
                    <div className="user-detail-display">
                    <UserDetailDisplay />
                    </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(AllUsersDetail),
    graphql(SetUserHours, { name: 'SetUserHours' }),
    graphql(DeleteUser, { name: 'DeleteUser' }),
    graphql(CreateUser, { name: 'CreateUser' })
)(AdminPage)