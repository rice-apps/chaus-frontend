/**
 * Created by Will
 */
import React, {Component} from 'react'
// Component Imports
// Apollo Imports
// import { graphql } from 'react-apollo'
import { Query, Mutation } from 'react-apollo';
// GraphQL Query Imports

// Material Imports
import Grid from 'material-ui/Grid';
// Material Icon Imports
import Save from '@material-ui/icons/save'

// Colors for Shift
const changeColor = (preference) => {
  // If we want to stick to a single color scheme
  switch (preference) {
    case 1:
      return "#2196f3"
    case 2:
      return "#64b5f6"
    case 3:
      return "#bbdefb" // light blue
    case 4:
      return "#f44336" // red
    default:
      return "#607d8b"
  }
}

/*
  Inputs:
    - dayName: Name of day as a string
    - startTime: Start time of shift as an integer
    - availability: Enumerable (1, 2, 3, 4) indicating user availability @ time
    - id: string containing shiftId; useful for mutation
*/
const ShiftButton = ({dayName, startTime, availability, id}) => {
  const handleAvailability = (id) => {

  }
  const buttonChanger = (dayName, startTime) => {
    if (dayname == 'Sunday' && startTime == 24) {
      return (
        <Button variant="raised"
                backgroundColor="#a4c639"
                icon={<Save />}
                onClick={handleSave()} />
      )
    }
    else {
      return (
        <Button key={id}
                variant="raised"
                backgroundColor={changeColor(availability)}
                disabled={closed}
                onClick={handleAvailability(id)} />
      )
    }
  }
  return (
    {buttonChanger(dayname, startTime)}
  )
}

/*
  Inputs:
    - dayName: Name of day as a string
    - shift: object corresponding to shift object in GraphQL, containing
      important properties for shifts
*/
const Shift => ({dayName, shift, toggle_availability, save}) => {
  return (
    <Mutation
      mutation={changeShiftAvailabilities}
      >
      <ShiftButton />
    </Mutation>
  )
}

export default connect (
    (state) => {
      return {}
    },
    (dispatch) => {
        return {
          toggle_availability: (id) => dispatch(toggle_availability(id)),
          save: () => dispatch(save())
        }
    }
)(Shift)
