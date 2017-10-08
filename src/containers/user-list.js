/**
 * Created by Jeffr on 7/17/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { selectUser } from '../actions/userActions'
import { Button, Modal, Grid, Menu, Segment } from 'semantic-ui-react'
import GridExampleGrid from './modal'

var selectuser = () => {}

const call_selectUser = (netid) => {
    selectuser(netid)
}



const ModalModalExample = ({netid, user}) => (
    <Modal trigger={<Button onClick={() => call_selectUser(netid)}>{netid}</Button>}>

        <Modal.Content>
            <Modal.Description>
                <h4>Name: {user.first}</h4>
                <h4>NetID: {user.netid}</h4>
                <h4>Hour Cap: {user.cap}</h4>
                {/*<h2>Monday: {user.mon}</h2>*/}
                {/*<h2>Tuesday: {user.tues}</h2>*/}
                {/*<h2>Wednesday: {user.wed}</h2>*/}
                {/*<h2>Thursday: {user.thurs}</h2>*/}
                {/*<h2>Friday: {user.fri}</h2>*/}
                {/*<h2>Saturday: {user.sat}</h2>*/}
                {/*<h2>Sunday: {user.sun}</h2>*/}
                <hr></hr>
                <h4>Availability: </h4>
                <GridExampleGrid />
            </Modal.Description>
        </Modal.Content>
    </Modal>
)
const UserList = ({user, users, selectUser}) => {


    selectuser = selectUser
    console.log("NETIDS : ",users.netids)
    return (
        <div>
            <ul>
                {users.netids.map((netid) => {
                    return (
                        <div key={netid}>
                            <ModalModalExample netid={netid} user={user}/>
                        </div>
                    )
                })}
            </ul>
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

