import React, {Component} from 'react'
// Components
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const EmployeeShift = ({ availability }) => {
    return (
        <div className="employee-shift">
            <h1>{availability}</h1>
        </div>
    )
}

export default EmployeeShift