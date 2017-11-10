/**
 * Created by Jeffr on 7/17/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectUser } from '../actions/userActions'
import RaisedButton from 'material-ui/RaisedButton'
// import GridExampleGrid from './modal'

var selectuser = () => {}

const call_selectUser = (netid) => {
    selectuser(netid)
}

// const ModalModalExample = ({netid, user}) => (
//     <Modal trigger={<Button onClick={() => call_selectUser(netid)}>{netid}</Button>}>
//
//         <Modal.Content>
//             <Modal.Description>
//                 <h4>Name: {user.first}</h4>
//                 <h4>NetID: {user.netid}</h4>
//                 <h4>Hour Cap: {user.cap}</h4>
//
//                 <hr></hr>
//                 <h4>Availability: </h4>
//                 <GridExampleGrid />
//             </Modal.Description>
//         </Modal.Content>
//     </Modal>
// )

const UserButton = ({netid, user, activeUser}) => {
  return (
    <RaisedButton primary={activeUser} onClick={() => call_selectUser(netid)}>{netid}</RaisedButton>
  )
}
const UserList = ({user, users, selectUser}) => {


    selectuser = selectUser
    console.log("NETIDS : ", users.netids)
    return (
        <div>
            <ul>
                {users.netids.map((netid) => {
                    return (
                        <div key={netid}>
                            <UserButton key={netid} netid={netid} user={user} activeUser={netid==user.netid ? true:false}/>
                        </div>
                    )
                })}
            </ul>
            <div>
              <p>Active User:</p>
              <h>{user.netid}</h>
            </div>
        </div>
    )
}


export default connect(
    (state) => {
        return {
            users: state.userReducer,
            user: state.activeReducer.user
        }
    },
    (dispatch) => {
        return {
            selectUser: (user) => dispatch(selectUser(user))
        }
    }
)(UserList)
