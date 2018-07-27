import React, {Component} from 'react';
import { connect } from 'react-redux';
// Component Imports

const UserDetailDisplay = ({ user }) => {
    return (
        <React.Fragment>
        {user && (
            <React.Fragment>
            <h1>Current User Detail</h1>
            {user.firstName && <h3>Name: {user.firstName} {user.lastName}</h3>}
            <h3>Netid: {user.netid}</h3>
            <h3>Role: {user.role}</h3>
            {user.idealHour && <h3>Ideal Hours: {user.idealHour}</h3>}
            {user.maxHour && <h3>Max Hours: {user.maxHour}</h3>}
            </React.Fragment>
        )}
        </React.Fragment>
    )
};

export default connect(
    (state) => {
        return {
            user: state.admin.userDetailReducer.user
        }
    }
)(UserDetailDisplay);