/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import Sidebar from '../containers/sidebar'
import FullCalendar from '../containers/full-calendar'
import Logo from '../containers/chaus-logo'

const App = () => (
    <div>
        <Sidebar/>
        <FullCalendar/>
        <Logo/>
    </div>
)

export default App
