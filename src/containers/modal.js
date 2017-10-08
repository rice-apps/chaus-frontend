/**
 * Created by Jeffr on 7/29/2017.
 */
import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import { Button, Modal, Grid, Menu, Segment, Checkbox } from 'semantic-ui-react'

// const CheckboxExampleShorthandObject = () => (
//     <Checkbox label={{ children: 'Make my profile visible' }} />
// )




const UserAvailability = ({user}) => {
    const week_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var Monday = user.week.mon
    var Tuesday = user.week.tues
    var Wednesday = user.week.wed
    var Thursday = user.week.thurs
    var Friday = user.week.fri
    var Saturday = user.week.sat
    var Sunday = user.week.sun

    const Fill = ({day, hour}) => {

        switch (day.toString()) {
            case "Monday":
                return (
                    <Grid.Column>
                        {hour}:
                        {Monday.includes(hour) ? <Checkbox checked={true}/> : <Checkbox/>}
                    </Grid.Column>
                )
            case "Tuesday":
                return (
                    <Grid.Column>
                        {hour}:
                        {(Tuesday.includes(hour)) ? <Checkbox checked={true}/> : <Checkbox/>}
                    </Grid.Column>
                )
            case "Wednesday":
                return (
                    <Grid.Column>
                        {hour}:
                        {(Wednesday.includes(hour)) ? <Checkbox checked={true}/> : <Checkbox/>}
                    </Grid.Column>
                )
            case "Thursday":
                return (
                    <Grid.Column>
                        {hour}:
                        {(Thursday.includes(hour)) ? <Checkbox checked={true}/> : <Checkbox/>}
                    </Grid.Column>
                )
            case "Friday":
                return (
                    <Grid.Column>
                        {hour}:
                        {(Friday.includes(hour)) ? <Checkbox checked={true}/> : <Checkbox/>}
                    </Grid.Column>
                )
            case "Saturday":
                return (
                    <Grid.Column>
                        {hour}:
                        {(Saturday.includes(hour)) ? <Checkbox checked={true}/> : <Checkbox/>}
                    </Grid.Column>
                )
            case "Sunday":
                return (
                    <Grid.Column>
                        {hour}:
                        {(Sunday.includes(hour)) ? <Checkbox checked={true}/> : <Checkbox/>}
                    </Grid.Column>
                )
            default:
                return (
                    <Grid.Column>
                        {Monday.includes(hour) ? <Checkbox checked={true}/> : <Checkbox/>}
                    </Grid.Column>
                )
        }
    }

    // ))
    var array = [1,2,3,4,5,6,7,8,9]
    return (
        <Grid columns={10} divided>
            {week_days.map((day) => {
                return(
                    <Grid.Row>
                        <Grid.Column>
                            {day}
                        </Grid.Column>
                        {array.map(hour => <Fill day={day} hour={hour}/>
                        )}
                    </Grid.Row>
                )})}
        </Grid>
    )
}


export default connect(
    (state) => {
        return {
            user: state.activeReducer.user
        }
    }
)(UserAvailability)