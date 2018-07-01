import React, {Component} from 'react'
import {connect} from 'react-redux'
// MUI Imports

// SASS
import '../../css/adminPage.scss';
import { TextField, RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            netid: ""
        };
    }

    handleNetidChange = (e) => {
        e.preventDefault();
        this.setState({
            netid: e.currentTarget.value
        });
    }

    handleSubmit = () => {
        let { netid } = this.state;
        let { CreateUser, AllUsersDetail } = this.props;
        CreateUser({
            variables: {
                netid: netid
            },
            optimisticResponse: {
                __typename: "Mutation",
                createUser: {
                    id: '192929',
                    netid: netid,
                    role: "Employee",
                    idealHour: null,
                    maxHour: null,
                    firstName: null,
                    lastName: null,
                    __typename: "User"
                }
            },
            update: (proxy, { data: { createUser } }) => {
                const data = proxy.readQuery({ query: AllUsersDetail });
                data.users.push(createUser);
                proxy.writeQuery({ query: AllUsersDetail, data });
            }
        });
        this.setState({
            netid: ""
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Add User</h1>
                    <TextField
                        floatingLabelText="Netid"
                        value={this.state.netid}
                        onChange={this.handleNetidChange}  
                    />
                    <RaisedButton
                        label="Submit"
                        onClick={this.handleSubmit}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default AddUser;