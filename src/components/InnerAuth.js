import React, {Component} from 'react'
import {connect} from 'react-redux'

const Authorization = (allowedRoles) => (
    (WrappedComponent) => {
        class WithAuthorization extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                var { fetching, loggedInUser } = this.props;
                if (fetching) {
                    // TODO: Change to a universal loading component
                    return (
                        <h3>Loading...</h3>
                    )
                }
                else if (!fetching && allowedRoles.includes(loggedInUser.role)) {
                    return (
                        <WrappedComponent {...this.props} />
                    )
                }
                else {
                    return (
                        <h1>No access.</h1>
                    )
                }
            }
        }
        return connect(
            (state) => {
                return {
                    loggedInUser: state.auth.authReducer.loggedInUser,
                    fetching: state.auth.authReducer.fetching
                }
            }
        )(WithAuthorization)
    }
) 

// Calls HOC Authorization, which only allows "Admin" access
export const Admin = Authorization(['Admin'])
export const Employee = Authorization(['Employee', 'Admin'])