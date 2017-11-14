/**
 * Created by Josh on 11/13/2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import EmployeeCalendar from '../containers/employee-calendar'
import UserList from '../containers/user-list'
import ChangeButton from '../containers/changes-button'

const FullCalendar = () => {
    return (
        <div style={{display: 'flex'}}>
            <UserList />
            <EmployeeCalendar/>
            <ChangeButton/>
        </div>
    )
}

export default FullCalendar