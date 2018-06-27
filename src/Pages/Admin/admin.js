import React, {Component} from 'react'
import {connect} from 'react-redux'
// MUI Imports
import DeleteForever from 'material-ui/svg-icons/action/delete-forever'
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
// Reactstrap
import {Container, Row, Col} from 'reactstrap';
// Actions
import {add_user, remove_user} from '../../actions/userActions'
import Sidebar from '../sidebar.js'
// Components
import AddUser from './addUser';
import UserDetailList from './userDetailList';
// GraphQL
import { graphql, compose } from 'react-apollo';
import { AllUsersDetail } from '../../graphql/queries/allUsers.graphql';

// SASS
import '../../css/adminPage.scss';

const AdminPage = ({ data: { users = [] }}) => {
    return (
        <div className="main-container">
            <div className="user-add">
                <AddUser />
            </div>
            <div className="user-list">
                <UserDetailList 
                users={users} />
            </div>
        </div>
    )
}

export default graphql(AllUsersDetail)(AdminPage);