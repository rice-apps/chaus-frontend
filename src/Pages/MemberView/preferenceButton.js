/**
 * Created by Will on 06/20/2018.
 */
import React, { PureComponent } from 'react'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import { Menu, Popover } from 'material-ui';
import PreferenceMenuItem from './preferenceMenuItem';

import '../../css/memberPage.scss';

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

    render() {
        var { dayName, hour, availability, availabilityId, shiftId, closed } = this.props;
        return (
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
                        <PreferenceMenuItem
                            dayName={dayName}
                            hour={hour}
                            shiftId={shiftId}
                            preference={1}
                            closePopover={this.handleClose}
                            changeColor={changeColor}
                            />
                        <PreferenceMenuItem
                            dayName={dayName}
                            hour={hour}
                            shiftId={shiftId}
                            preference={2}
                            closePopover={this.handleClose}
                            changeColor={changeColor}
                            />
                        <PreferenceMenuItem
                            dayName={dayName}
                            hour={hour}
                            shiftId={shiftId}
                            preference={3}
                            closePopover={this.handleClose}
                            changeColor={changeColor}
                            />
                        <PreferenceMenuItem
                            dayName={dayName}
                            hour={hour}
                            shiftId={shiftId}
                            preference={4}
                            closePopover={this.handleClose}
                            changeColor={changeColor}
                            />
                    </Menu>
                </Popover>
            </div>
        )
    }
}

export default PreferenceButton
