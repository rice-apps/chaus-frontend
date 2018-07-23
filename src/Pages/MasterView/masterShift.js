import React, { Component } from 'react';
import { connect } from 'react-redux';
// Material UI
import { RaisedButton, Dialog, MuiThemeProvider } from 'material-ui';
// Components
import MasterShiftDetailed from './masterShiftDetailed';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';
// Actions
// Context
import { MasterShiftContext } from './masterContext';
// SASS
import '../../css/masterPage.scss';

class MasterShift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }
    handleClose = () => {
        this.setState({ modalOpen: false });
    }
    render() {
        var { id } = this.props;
        return (
            <MuiThemeProvider>
                <div>
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
                    <RaisedButton
                    onClick={this.handleOpen}
                    />
                </div>
            </MuiThemeProvider>
        )
    }

}

// const MasterShift = ({ }) => {
//     var modalOpen = false;
//     const openModal = () => {
//         modalOpen = true;
//     }
//     return (
//         <div className="master-shift">
//             <MuiThemeProvider>
//                 <div>
//                     <RaisedButton
//                     onClick={() => openModal()}
//                     />
//                     <ShiftModal open={modalOpen} />
//                 </div>
//             </MuiThemeProvider>
//         </div>
//     )
// }

export default MasterShift;