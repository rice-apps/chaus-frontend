/**
 * Created by Will on 6/18/2018.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectUser } from '../../actions/userActions';

const styles = {
    div: {
        marginLeft: '2vw',
        marginTop: '2vh'
    }
}

const UserInfo = ({activeUserNetid, firstName, lastName, selectUser}) => {
    // On render, selectUser should be called
    selectUser(activeUserNetid);
    return (
        <div style={styles.div}>
            <h1>{firstName + " " + lastName}</h1>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            activeUserNetid: state.auth.activeUserReducer.activeUser,
            firstName: state.eCal.activeReducer.user.firstName,
            lastName: state.eCal.activeReducer.user.lastName
        }
    },
    (dispatch) => {
        return {
            selectUser: (user) => dispatch(selectUser(user))
        }
    }
)(UserInfo)
