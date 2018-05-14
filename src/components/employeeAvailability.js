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
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from 'material-ui/TextField';

// GraphQL Queries
const getSchedule = gql`
  query UserAvailabilityQuery {
    schedules {
      id
      week {
        id
        shifts {
          id
          startTime
          endTime
          availabilities(where: { user: { netid: "jhw5" } }) {
            id
            availability
          }
        }
      }
    }
  }
`

// GraphQL Mutations
const changeShiftAvailabilities = gql`
  mutation ShiftAvailabilitiesMutation($netid: String!, $changedShifts: [shiftAvail!]!) {
    updateShiftAvailabilities(
      netid: $netid
      shiftAvailabilities: $changedShifts
    )
  }
`

// Components



export default EmployeeAvailability;
