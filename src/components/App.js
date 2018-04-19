/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import {connect} from 'react-redux'
import Sidebar from '../Pages/sidebar'
import FullCalendar from '../Pages/eCalendar/full-calendar'
import MFullCalendar from '../Pages/mCalendar/master-calendar'
import Logo from '../Pages/chaus-logo'
import AddRemove from '../Pages/AddDrop/add-remove'

const App = ({location}) => {
    switch (location) {
        case "eCalendar":
            return (
                <div>
                    <Sidebar/>
                    <FullCalendar/>
                    <Logo/>
                </div>
            )
        case "mCalendar":
            return (
                <div>
                    <Sidebar/>
                    <MFullCalendar/>
                    <Logo/>
                </div>
            )
        case "addRemove":
            return (
                <div>
                    <Sidebar/>
                    <AddRemove/>
                    <Logo/>
                </div>
            )
        default:
            return (
                <div>
                    <Sidebar/>
                    <FullCalendar/>
                    <Logo/>
                </div>
            )
    }

}

export default connect(
    (state) => {
        return {
            location: state.pageReducer.location
        }
    }
)(App)
