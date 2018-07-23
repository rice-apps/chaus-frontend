import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI
// Components
import AvailabilityButton from './availabilityButton';
// GraphQL
// Actions
// Context
// SASS
import '../../css/masterPage.scss';

// class MasterScheduled extends PureComponent {
//     constructor() {
//         super();
//         // Initialize to empty
//         this.state = {
//             scheduled: []
//         };
//     }
    
//     // Necessary lifecycle method

//     render() {
//         var { scheduled } = this.state;
//         console.log(scheduled);
//         return (
//             <React.Fragment>
//                 {scheduled.map((netid) => (
//                     <AvailabilityButton
//                     key={`${netid}scheduled`}
//                     netid={netid}
//                     />
//                 ))}
//             </React.Fragment>
//         )
//     }
// }

const MasterScheduled = ({ scheduled }) => {
    return (
        <div className="master-scheduled">
            <h4>Scheduled</h4>
            <React.Fragment>
            {scheduled.map((netid) => (
                <AvailabilityButton
                key={`${netid}-scheduled`}
                netid={netid}
                />
            ))}
            </React.Fragment>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            scheduled: state.mCal.newActiveShiftReducer.scheduled
        }
    },
    (dispatch) => {
        return {
        }
    }
)(MasterScheduled);