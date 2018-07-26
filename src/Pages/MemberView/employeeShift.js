import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI
import { RaisedButton } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
// Components
import { EmployeeShiftContext } from './employeeContext';
import PreferenceButton from './preferenceButton';
import SaveButton from '../../components/SaveButton';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';
// Actions
import { savePreferences } from '../../actions/employeeActions';

// SASS
import { MuiThemeProvider } from 'material-ui/styles';

const returnButton = (dayName, startTime, saving, savePreferences) => {
    if (dayName == 'Saturday' && startTime == '24') {
        return (
            <SaveButton
            saving={saving}
            saveMechanism={savePreferences}
            />
        )
    }
    return (
        <PreferenceButton />
    )
}

const EmployeeShift = ({ saving, savePreferences }) => {
    return (
        <div className="calendar-shift">
            <MuiThemeProvider>
                <EmployeeShiftContext.Consumer>
                {({ dayName, startTime }) => 
                returnButton(dayName, startTime, saving, savePreferences)
                }
                </EmployeeShiftContext.Consumer>
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