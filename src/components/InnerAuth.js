import React, {Component} from 'react'
import {connect} from 'react-redux'

const Authorization = (allowedRoles) => (
    (WrappedComponent) => {
        class WithAuthorization extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                if (allowedRoles.includes(this.props.role)) {
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
                    role: state.auth.roleReducer.role
                }
            }
        )(WithAuthorization)
    }
) 

export default Authorization