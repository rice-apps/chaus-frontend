import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI
import { RaisedButton } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
// Components
import PreferenceButton from './preferenceButton';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';
// Actions
import { savePreferences } from '../../actions/employeeActions';

// SASS
import '../../css/memberPage.scss';
import { MuiThemeProvider } from 'material-ui/styles';

// const setButton = (dayName, hour) => {
//     if (dayName == 'Sunday' && hour == '24') {
//       return (
//         <ChangeButton />
//       )
//     }
//     return (<PreferenceSelect dayname={dayname} hour={hour} style={{height: 34}} />)
//   }

const returnButton = (dayName, hour, availabilityId, availability, shiftId, savePreferences, saving, closed ) => {
    if (dayName == 'Sunday' && hour == '24') {
        if (saving) {
            return (<CircularProgress />);
        }
        else {
            return (
                <RaisedButton
                    label="Save"
                    onClick={() => savePreferences()}
                />
            )
        }
    }
    return (<PreferenceButton
                dayName={dayName}
                hour={hour}
                availabilityId={availabilityId}
                availability={availability}
                shiftId={shiftId}
                closed={closed}
            />)
}

const EmployeeShift = ({ availability, dayName, hour, availabilityId, shiftId, savePreferences, saving, closed }) => {
    return (
        <div className="employee-shift">
            <MuiThemeProvider>
                {returnButton(dayName, hour, availabilityId, availability, shiftId, savePreferences, saving, closed)}
            </MuiThemeProvider>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            saving: state.eCal.newScheduleReducer.saving
        }
    },
    (dispatch) => {
        return {
            savePreferences: () => dispatch(savePreferences())
        }
    }
)(EmployeeShift)