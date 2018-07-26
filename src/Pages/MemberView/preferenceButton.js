/**
 * Created by Will on 06/20/2018.
 */
import React, { PureComponent } from 'react'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import { Menu, Popover } from 'material-ui';
import PreferenceMenuItem from './preferenceMenuItem';

import '../../css/memberPage.scss';
import { EmployeeShiftContext } from './employeeContext';

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

class PreferenceButton extends PureComponent {
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
    
    /*
    TODO: Remove inputs to this method; PreferenceMenuItem should use
    ContextAPI Consumer to get dayName and shift; currently not using
    because MaterialUI Popover is messing it up
    */
    createMenuItems = (dayName, shift) => {
        var menuItems = [];
        for (var preference = 1; preference <= 4; preference++) {
            menuItems.push(
                <PreferenceMenuItem
                dayName={dayName}
                shift={shift}
                preference={preference}
                closePopover={this.handleClose}
                changeColor={changeColor}
                />
            );
        }
        return menuItems;
    }

    render() {
        return (
            <EmployeeShiftContext.Consumer>
                {({ dayName, shift, availability, closed }) => (
                    <div>
                        <div>
                            <RaisedButton
                            backgroundColor={changeColor(availability)}
                            onClick={this.handleClick} 
                            disabled={closed}
                            />
                        </div>
                        <Popover
                        open={this.state.popoverOpen}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={this.state.anchorOrigin}
                        targetOrigin={this.state.targetOrigin}
                        onRequestClose={this.handleClose}
                        zDepth={0}>
                            <Menu>
                                <React.Fragment>
                                {this.createMenuItems(dayName, shift)}                                
                                </React.Fragment>
                            </Menu>
                        </Popover>
                    </div>
                )}
            </EmployeeShiftContext.Consumer>
        )
    }
}

export default PreferenceButton
