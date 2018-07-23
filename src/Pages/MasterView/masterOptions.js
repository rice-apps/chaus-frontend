import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
// Components
// Actions
// GraphQL
// import { SetUserHours, DeleteUser, CreateUser } from '../../graphql/mutations/admin.graphql';

// SASS
import '../../css/memberPage.scss';

const MasterOptions = ({ }) => {
    return (
        <div>

        </div>
    )
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
)(MasterOptions);