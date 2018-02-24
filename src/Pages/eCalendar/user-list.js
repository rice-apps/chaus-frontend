/**
 * Created by Jeffr on 7/17/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectUser, get_availability } from '../../actions/userActions'
import RaisedButton from 'material-ui/RaisedButton'


const UserButton = ({netid, user, activeUser, selectUser}) => {
    return (
        <RaisedButton primary={activeUser} onClick={() => selectUser(netid)}>{firstName}</RaisedButton>
    )
}


const UserList = ({user, users, selectUser}) => {

    return (
        <div style={{marginTop: 33}}>
            <ul>
                {users.netids.map((netid) => {
                    return (
                        <div key={netid}>
                            <UserButton key={netid} netid={netid} user={user} activeUser={netid==user.netid ? true:false} selectUser={selectUser}/>
                        </div>
                    )
                })}
            </ul>
            <div style={{margin: 40}}>
                <p>Active User:</p>
                <hr style={{marginTop: -14, marginLeft: 0, width: 72}}/>
                <h>{user.netid}</h>
            </div>
        </div>
    )
}


export default connect(
    (state) => {
        return {
            users: state.eCal.userReducer,
            user: state.eCal.activeReducer.user
        }
    },
    (dispatch) => {
        return {
            selectUser: (user) => dispatch(selectUser(user)),
        }
    }
)(UserList)
