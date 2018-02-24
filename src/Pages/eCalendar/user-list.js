/**
 * Created by Jeffr on 7/17/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectUser, get_availability } from '../../actions/userActions'
import RaisedButton from 'material-ui/RaisedButton'

// import GridExampleGrid from './modal'

// var selectuser = () => {}
//
// const call_selectUser = (netid) => {
//     selectuser(netid)
// }


const UserButton = ({name, netid, user, activeUser, selectUser}) => {
  return (
    <RaisedButton primary={activeUser} onClick={() => selectUser(netid)}>{name}</RaisedButton>
  )
}


const UserList = ({user, users, selectUser, get_availability}) => {


    // selectuser = selectUser
    return (
        <div style={{marginTop: 33}}>
            <ul>
                {users.all_users.map((x) => {
                    console.log(x)
                    return (
                        <div key={x.netid}>
                            <UserButton onClick={() => get_availability(x.netid)}
                                        name={x.firstName+" "+x.lastName}
                                        key={x.netid} netid={x.netid}
                                        user={user} activeUser={x.netid==user.netid}
                                        selectUser={selectUser}
                            />
                        </div>
                    )
                })}
            </ul>
            <div style={{margin: 40}}>
                <p>Active User:</p>
                <hr style={{marginTop: -14, marginLeft: 0, width: 72}}/>
                <h>{user.firstName+" "+user.lastName+" ("+user.netid+")"}</h>
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
            get_availability: (user) => dispatch(get_availability(user))
        }
    }
)(UserList)
