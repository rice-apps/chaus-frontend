import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
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