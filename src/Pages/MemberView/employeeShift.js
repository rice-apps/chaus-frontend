import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Components
import { EmployeeShiftContext } from './employeeContext';
import PreferenceButton from './preferenceButton';
import SaveButton from '../../components/SaveButton';
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