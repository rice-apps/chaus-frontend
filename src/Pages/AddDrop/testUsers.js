import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import RaisedButton from '@material-ui/core/RaisedButton';
import TextField from '@material-ui/core/TextField';
import {List, ListItem} from '@material-ui/core/List';
// Reactstrap
import {Container, Row, Col} from 'reactstrap';
// Actions
import {setHours} from '../../actions/userActions'

const TestUserActions = ({setHours}) => {
    return (
        <MuiThemeProvider>
            <RaisedButton
                primary
                label="Meme"
                onClick={() => setHours("abc1", 12, 'min')}
                />
        </MuiThemeProvider>
    )
}

export default connect(
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            setHours: (netid, hours, idealOrMax) => dispatch(setHours(netid, hours, idealOrMax))
        }
    }
)(TestUserActions)