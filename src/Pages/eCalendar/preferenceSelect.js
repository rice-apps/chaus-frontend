/**
 * Created by Will on 06/20/2018.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { toggle_availability } from '../../actions/employeeActions'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import { Menu, Popover } from 'material-ui';
import PreferenceMenuItem from './preferenceMenuItem';

const styles = {
    div: {

    },
    popover: {
        backgroundColor: 'transparent'
    },
    menu: {
        backgroundColor: 'transparent'
    },
    menuItem: {

    }
}

const changeColor = (preference) => {
  // If we want to stick to a single color scheme
  switch (preference) {
    case 1:
      return "#5fa55a" // green
    case 2:
      return "#f6d51f" // yellow
    case 3:
      return "#fa8925" // orange
    case 4:
      return "#fa5457" // red
    default:
      return "#01b4bc" // blue
  }
}

class PreferenceButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: false,
            anchorOrigin: {
                horizontal: 'right',
                vertical: 'center'
            },
            targetOrigin: {
                horizontal: 'left',
                vertical: 'center'
            }
        };
    };

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            popoverOpen: true,
            anchorEl: event.currentTarget
        });
    }

    handleClose = (event) => {
        this.setState({
            popoverOpen: false
        });
    }

    render() {
        var { dayname, hour } = this.props;
        return (
            <div>
                <div>
                    <RaisedButton
                    backgroundColor={changeColor(hour.available)}
                    onClick={this.handleClick} 
                    disabled={hour.closed}
                    />
                </div>
                <Popover
                open={this.state.popoverOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={this.state.anchorOrigin}
                targetOrigin={this.state.targetOrigin}
                onRequestClose={this.handleClose}
                style={styles.popover}
                zDepth={0}>
                    <Menu style={styles.menu}>
                        <PreferenceMenuItem
                            dayname={dayname}
                            hour={hour}
                            preference={1}
                            toggle_availability={toggle_availability}
                            closePopover={this.handleClose}
                            changeColor={changeColor}
                            />
                        <PreferenceMenuItem
                            dayname={dayname}
                            hour={hour}
                            preference={2}
                            toggle_availability={toggle_availability}
                            closePopover={this.handleClose}
                            changeColor={changeColor}
                            />
                        <PreferenceMenuItem
                            dayname={dayname}
                            hour={hour}
                            preference={3}
                            toggle_availability={toggle_availability}
                            closePopover={this.handleClose}
                            changeColor={changeColor}
                            />
                        <PreferenceMenuItem
                            dayname={dayname}
                            hour={hour}
                            preference={4}
                            toggle_availability={toggle_availability}
                            closePopover={this.handleClose}
                            changeColor={changeColor}
                            />
                    </Menu>
                </Popover>
            </div>
        )
    }
}

export default connect (
    (state) => {
      return {}
    },
    (dispatch) => {
        return {
          toggle_availability: (dayname, hour, availability) => dispatch(toggle_availability(dayname, hour, availability))
        }
    }
)(PreferenceButton)
