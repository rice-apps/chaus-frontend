import React, {Component} from 'react'
// MUI Imports
import { FlatButton, Popover, Menu, MenuItem } from 'material-ui';
// SASS
import '../../css/adminPage.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class UserDetailButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            user: props.user
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
                                onClick={() => this.props.setUserHours({
                                    variables: {
                                        netid: user.netid,
                                        idealHours: 4,
                                        maxHours: 8
                                    }
                                })} />
                            <MenuItem 
                                primaryText="Delete User" 
                                onClick={() => this.props.deleteUser({
                                    variables: {
                                        netid: user.netid
                                    }
                                })} />
                        </Menu>
                    </Popover>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default UserDetailButton;
