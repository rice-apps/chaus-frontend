import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI
// Components
// GraphQL
// Actions
// Context
// SASS
import '../../css/masterPage.scss';

class MasterScheduled extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    // Necessary lifecycle method

    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => {
        return {
            
        }
    },
    (dispatch) => {
        return {
        }
    }
)(MasterScheduled);