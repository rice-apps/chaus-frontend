import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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


const list_style = {
  width: '30vw',
  display: 'inline-block',
  justifyContent: 'center',
  textAlign: 'center'
}

const listItemStyle = {
  zIndex: 3,
  fontFamily: 'Roboto'
}

const buttonStyle = {
  width: '20vw'
}

const listIconStyle = {
  display: 'inline-block',
  width: '25vw'
}

const addUserStyle = {
  display: 'grid',
  marginLeft: '5vw',
  marginRight: '5vw',
  width: '25vw',
  alignContent: 'right'
}

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      netid: "",
      firstName: "",
      lastName: ""
    }
  };

  handleSubmit() {
    console.log("Running!")
    // Dispatch add action
    let state_copy = {...this.state}
    let {netid, firstName, lastName} = state_copy;
    console.log(netid, firstName, lastName);
    this.props.add_user(netid, firstName, lastName);
    // Clear values
    this.setState({netid: "", firstName: "", lastName: ""});
  }

  render() {
    return (
      <div style={addUserStyle}>
        <TextField
          floatingLabelText="Netid"
          onChange={(e, val) => this.setState({netid: val})}
          value={this.state.netid}
          underlineShow={false}
          />
        <Divider />
        <TextField
          floatingLabelText="First Name"
          onChange={(e, val) => this.setState({firstName: val})}
          value={this.state.firstName}
          underlineShow={false}
          />
        <Divider />
        <TextField
          floatingLabelText="Last Name"
          onChange={(e, val) => this.setState({lastName: val})}
          value={this.state.lastName}
          underlineShow={false}
          />
        <Divider />
        <RaisedButton
          label="Submit"
          onClick={this.handleSubmit.bind(this)}
          />
      </div>
    )
  }
}


const AddRemove = ({users, netids, add_user, remove_user}) => {
  return (
    <MuiThemeProvider>
    <div style={{display: 'inline-block'}}>
        <div style={{marginBottom: '50px', zIndex: 10, position: 'relative'}}>
          <Sidebar/>
        </div>
        <div style={{alignContent: 'right'}}>
          <AddUser add_user={add_user}/>
        </div>
        <div style={{display: 'flex', alignContent: 'left'}}>
          <List style={list_style}>
            {users.map((user) => {
              let name = user.firstName + " " + user.lastName;
              return (
                <div style={listIconStyle}>
                  <ListItem
                    key={user._id}
                    disabled
                    style={listItemStyle}>
                    <RaisedButton
                      primary
                      label={name}
                      style={buttonStyle} />
                  </ListItem>
                  <IconButton style={{display: 'inline-block'}}>
                    <DeleteForever
                      onClick={() => remove_user(user.netid)}
                      />
                  </IconButton>
                </div>
              )
            })}
          </List>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default connect (
    (state, ownProps) => {
      return {
          users: state.eCal.userReducer.users,
          netids: state.eCal.userReducer.netids
      }
    },
    (dispatch, ownProps) => {
        return {
          add_user: (netid, firstName, lastName) => dispatch(
            add_user(netid, firstName, lastName)),
          remove_user: (netid) => dispatch(remove_user(netid))
        }
    }
)(AddRemove)
