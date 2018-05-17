/**
 * Created by Will
 */
import React, {Component} from 'react'
// Component Imports
import Sidebar from './sidebar.js'
// Apollo Imports
// import { graphql } from 'react-apollo'
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag'
// Material Imports
import Grid from 'material-ui/Grid';

// Dumb Components
const Shift = ({shift}) => {
  return (
    <Button key={id}
            variant="raised"
            backgroundColor={changeColor(availability)}
            disabled={closed}
            onClick={handleAvailability(id)} />
  )
}

const Day = ({dayName, shifts}) => {
  // Array of shiftIds which were changed
  let changedShifts = [];
  return (
    <Grid>
      {shifts.map((shift) => {
        return (
          <Shift
            key={shift.id}
            
            />
        )
      })}
    </Grid>
  )
}

export default Day;
