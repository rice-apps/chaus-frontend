/**
 * Created by Jeffr on 7/17/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectUser } from '../../actions/userActions'
import { get_availability } from '../../actions/employeeActions'
import RaisedButton from 'material-ui/RaisedButton'

// import GridExampleGrid from './modal'

// var selectuser = () => {}
//
// const call_selectUser = (netid) => {
//     selectuser(netid)
// }


const UserButton = ({name, netid, user, activeUser, selectUser}) => {
  return (
    <RaisedButton primary={activeUser} style={{width: 120}} onClick={() => selectUser(netid)}>{name}</RaisedButton>
  )
}


const UserList = ({user, users, selectUser, netids, get_availability}) => {

    // let selectuser = selectUser
    console.log("Here are the users: ",users)
    // selectuser = selectUser
    return (
        <div style={{marginTop: 33}}>
            <ul>
                {users.map((x) => {
                    console.log("user: " + x)
                    return (
                        <div key={x.netid}>
                            <RaisedButton primary={x.netid==user.netid} 
                                            style={{width: 120}} 
                                            onClick={() => selectUser(x.netid)}

                            > 
                            {x.firstName+" "+x.lastName} </RaisedButton>

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
            users: state.eCal.userReducer.users,
            netids: state.eCal.userReducer.netid,
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
