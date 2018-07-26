import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Material UI
import { RaisedButton } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
// Components
import { EmployeeShiftContext } from './employeeContext';
import PreferenceButton from './preferenceButton';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';
// Actions
import { savePreferences } from '../../actions/employeeActions';

// SASS
import '../../css/memberPage.scss';
import { MuiThemeProvider } from 'material-ui/styles';

const returnButton = (dayName, startTime, saving, savePreferences) => {
    if (dayName == 'Saturday' && startTime == '24') {
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
    return (
        <PreferenceButton />
    )
}

const EmployeeShift = ({ saving, savePreferences }) => {
    return (
        <div className="employee-shift">
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