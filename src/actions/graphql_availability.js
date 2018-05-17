
const toggleAvailability = (id) => {
  return (dispatch) => {
    return dispatch({
      type: "TOGGLE_AVAILABILITY",
      id
    })
  }
}

/*
  Inputs:
  - saveMutation: the mutation which changes the shifts
  - 
*/
const save = (saveMutation, changedShifts) => {
  return (dispatch) => {
    // Get Shifts

    // Execute Mutation Passed Into Function

  }
}
