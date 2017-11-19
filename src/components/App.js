/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import {connect} from 'react-redux'
import Sidebar from '../Pages/sidebar'
import FullCalendar from '../Pages/eCalendar/full-calendar'
import mFullCalendar from '../Pages/mCalendar/master-calendar'
import Logo from '../Pages/chaus-logo'

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
                    <mFullCalendar/>
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
