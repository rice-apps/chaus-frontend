/**
Created by Will on 2/17/18
 */
import { client } from '../index';
import { EmployeeCalendarQuery } from '../graphql/queries/employee.graphql';
import { SaveUserPreference } from '../graphql/mutations/employee.graphql';

// New Beginning

export const initializeCalendar = (netid) => {
  // Get netid
  return async (dispatch) => {
    // Returns a promise, so we wait for resolve
    const promise = await client.query({
      query: EmployeeCalendarQuery,
      variables: {
        netid
      }
    });
    // Cleaning up data
    const schedule = promise.data.schedules[0];
    dispatch({
      type: "GET_AVAILABILITY_NEW",
      schedule
    })
  }
};

export const updatePreference = (id, availability, dayName) => {
  return (dispatch, getState) => {
    // Get netid
    const { netid } = getState().auth.authReducer.loggedInUser;
    dispatch({
      type: "UPDATE_PREFERENCE",
      id,
      dayName,
      availability,
      netid
    })
  }
};

// Save Preferences Helper function
const findChangedShifts = (schedule) => {
  var shiftAvailabilities = [];
  Object.keys(schedule.week).forEach((dayName) => {
    var day = schedule.week[dayName];
    for (var shift of day.shifts) {
      if (shift.changed) {
        var shiftAvail = {
          shift: shift.id,
          availability: shift.availabilities // TODO: CHANGE TO AVAILABILITY 
        };
        shiftAvailabilities.push(shiftAvail);
      }
    }
  });
  return shiftAvailabilities;
};

/**
 * TODO: Reset changed property for all shifts on save
 */
export const savePreferences = () => {
  return async (dispatch, getState) => {
    // Set loading circle
    dispatch({
      type: "PRE_SAVE_PREFERENCE"
    });
    // Get netid
    // const netid = getState().auth.activeUserReducer.activeUser;
    const netid = getState().auth.authReducer.loggedInUser.netid;
    // Get changed shifts
    const schedule = getState().eCal.newScheduleReducer.schedule;
    var shiftAvailabilities = findChangedShifts(schedule);
    // Make GraphQL call
    const promise = await client.mutate({
      mutation: SaveUserPreference,
      variables: {
        netid,
        shiftAvailabilities
      }
    });
    // Remove loading circle
    dispatch({
      type: "POST_SAVE_PREFERENCE"
    })
  }
};

