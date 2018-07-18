import React, {Component} from 'react'
// Components
import PreferenceButton from './preferenceButton';
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

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

const returnButton = (dayName, hour, id, availability, SetUserPreference) => {
    if (dayName == 'Saturday' && hour == '24') {
        return (
            <h1>Meme</h1>
        )
    }
    return (<PreferenceButton
                dayName={dayName}
                hour={hour}
                id={id}
                availability={availability}
                SetUserPreference={SetUserPreference}
            />)
}

const EmployeeShift = ({ availability, dayName, hour, id, SetUserPreference, SaveUserPreference }) => {
    return (
        <div className="employee-shift">
            <MuiThemeProvider>
                {returnButton(dayName, hour, id, availability, SetUserPreference)}
            </MuiThemeProvider>
        </div>
    )
}

export default EmployeeShift