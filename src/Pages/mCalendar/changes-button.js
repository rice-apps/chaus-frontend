/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { save_changes } from '../../actions/userActions'
// import { WReducer } from '../reducers/index'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import Save from 'material-ui/svg-icons/content/save'
import {fullWhite} from 'material-ui/styles/colors';

const combineDays = () => {
  weekObject = {"Monday":mon, "Tuesday":tues, "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
}

const ChangeButton = ({mon, tues, wed, thurs, fri, sat, sun}) => {
  return (

      <RaisedButton backgroundColor="#a4c639" icon={<Save color={fullWhite}/>} style={{height: 34}}/>
  )
}

export default connect(
    (state) => {

    }
)(ChangeButton)
