import React, {Component} from 'react'
// MUI Imports
import { FlatButton, Popover, Menu, MenuItem, Dialog, RaisedButton } from 'material-ui';
// SASS
import '../../css/adminPage.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField/TextField';

class UserDetailButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            user: props.user,
            openModal: false,
            ideal: props.user.idealHour,
            max: props.user.maxHour
        };
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        })
    }

    handleSetHoursModal = () => {
        this.setState({
            open: false,
            openModal: true
        });
    }

    handleDeleteUser = () => {
        let { netid } = this.state.user;
        let { AllUsersDetail } = this.props;
        this.props.DeleteUser({
            variables: {
                netid: netid
            },
            optimisticResponse: {
                __typename: "Mutation",
                deleteUser: {
                    netid: netid,
                    __typename: "User"
                }
            },
            update: (proxy, { data: { deleteUser } }) => {
                let data = proxy.readQuery({ query: AllUsersDetail });
                let users = data.users.filter((user) => user.netid != deleteUser.netid);
                data = {...data, users};
                proxy.writeQuery({ query: AllUsersDetail, data });
            }
        });
        this.setState({
            open: false
        })
    }

    handleModalClose = () => {
        this.setState({
            openModal: false
        });
    }

    handleSetHours = () => {
        let { netid } = this.state.user;
        let { ideal, max } = this.state;
        console.log(ideal);
        console.log(max);
        this.props.SetUserHours(
        {
            variables: {
                netid: netid,
                idealHour: ideal,
                maxHour: max
            },
            optimisticResponse: {
                __typename: "Mutation",
                updateUser: {
                    netid: netid,
                    __typename: "User",
                    idealHour: ideal,
                    maxHour: max
                }
            }
        });
        this.setState({
            openModal: false
        })
    }

    handleHoursInput = (event, type) => {
        this.setState({
            [type]: event.currentTarget.value
        })
    }

    render() {
        let { open, user } = this.state;
        return (
            <MuiThemeProvider>
                <div>
                    <FlatButton
                        onClick={this.handleClick}
                        label={user.netid} />
                    <Popover
                        open={open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        >
                        <Menu>
                            <MenuItem 
                                primaryText="Set User Hours" 
                                onClick={this.handleSetHoursModal} />
                            <MenuItem 
                                primaryText="Delete User" 
                                onClick={this.handleDeleteUser} />
                        </Menu>
                    </Popover>
                    <Dialog
                        title="Set User Hours"
                        modal={false}
                        actions={
                            <RaisedButton
                            onClick={this.handleSetHours}
                            label="Submit" />
                        }
                        open={this.state.openModal}
                        onRequestClose={this.handleModalClose}>
                        <TextField
                            floatingLabelText="Ideal Hours"
                            onChange={(e) => this.handleHoursInput(e, "ideal")}
                            value={this.state.ideal} />
                        <TextField
                            floatingLabelText="Max Hours"
                            onChange={(e) => this.handleHoursInput(e, "max")}
                            value={this.state.max} />
                    </Dialog>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default UserDetailButton;
