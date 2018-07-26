import React, { Component } from 'react';
// Material UI
import { RaisedButton, Dialog, MuiThemeProvider } from 'material-ui';
// Components
import MasterShiftDetailed from './masterShiftDetailed';
// Context
import { MasterShiftContext } from './masterContext';
// SASS
import '../../css/masterPage.scss';

// TODO: Change Color based on Slots Filled
const changeColor = () => {
    return "#0080FF";
}

class MasterShift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            closed: props.closed
        };
    }
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }
    handleClose = () => {
        this.setState({ modalOpen: false });
    }
    render() {
        var { closed } = this.state;
        return (
            <MuiThemeProvider>
                <div className="master-shift">
                    <RaisedButton
                    label=" "
                    onClick={this.handleOpen}
                    disabled={closed}
                    backgroundColor={changeColor()}
                    />
                    <MasterShiftContext.Consumer>
                    { props => {
                        /*
                        If this seems hacky, it's because it kind of is...
                        Dialogs in MUI v0.20 don't play well with new Context API
                        TODO: Revisit this after upgrade to MUI v1.4; move consumer
                        to inside masterShiftDetailed.js
                        */
                        return (
                            <Dialog
                            title="Meme"
                            modal={false}
                            open={this.state.modalOpen}
                            onRequestClose={this.handleClose}
                            >
                                <MasterShiftDetailed contextVals={props} />
                            </Dialog>
                        )
                    }}
                    </MasterShiftContext.Consumer>
                </div>
            </MuiThemeProvider>
        )
    }

}

export default MasterShift;