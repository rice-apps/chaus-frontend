/**
 * Created by Jeffr on 7/17/2017.
 */

import React from 'react'
import UserList from '../containers/user-list'
import Day from '../containers/day'
import Calendar from '../containers/calendar'
const App = () => (
    <div>
        <h2>Username List: </h2>
        <UserList/>
        <hr />
        <Calendar/>
    </div>
)

export default App