/**
Created by Will on 2/17/18
 */
import { resource } from './masterActions'
import { client } from '../index';
import { EmployeeCalendarQuery } from '../graphql/queries/employee.graphql';
import { SaveUserPreference } from '../graphql/mutations/employee.graphql';
// Other actions
import { getUserInfo } from './authActions';

// New Beginning
export const initializeCalendar = () => {
  // Get netid
  return (dispatch, getState) => {
    // Sets user info (netid, role)
    dispatch(getUserInfo())
    // Use netid to fetch availability
    const netid = localStorage.getItem('netid');
    dispatch(getAvailability(netid))
  }
}

export const updatePreference = (id, availability, dayName) => {
  return (dispatch, getState) => {
    // Get netid
    const netid = getState().auth.activeUserReducer.activeUser;
    dispatch({
      type: "UPDATE_PREFERENCE",
      id,
      dayName,
      availability,
      netid
    })
  }
}

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
}

export const savePreferences = () => {
  return async (dispatch, getState) => {
    // Set loading circle
    dispatch({
      type: "PRE_SAVE_PREFERENCE"
    });
    // Get netid
    const netid = getState().auth.activeUserReducer.activeUser;
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
}

const monDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const tuesDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const wedDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false},
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const thursDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false},
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const friDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false},
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const satDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: true},
  {hour: 9, available: 0, changed: false, closed: true},
  {hour: 10, available: 0, changed: false, closed: true},
  {hour: 11, available: 0, changed: false, closed: true},
  {hour: 12, available: 0, changed: false, closed: true },
  {hour: 13, available: 0, changed: false, closed: true},
  {hour: 14, available: 0, changed: false, closed: true},
  {hour: 15, available: 0, changed: false, closed: true},
  {hour: 16, available: 0, changed: false, closed: true},
  {hour: 17, available: 0, changed: false, closed: true},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]
const sunDefault = [
  {hour: 7, available: 0, changed: false, closed: true},
  {hour: 8, available: 0, changed: false, closed: true},
  {hour: 9, available: 0, changed: false, closed: true},
  {hour: 10, available: 0, changed: false, closed: true},
  {hour: 11, available: 0, changed: false, closed: true},
  {hour: 12, available: 0, changed: false, closed: true },
  {hour: 13, available: 0, changed: false, closed: true},
  {hour: 14, available: 0, changed: false, closed: true},
  {hour: 15, available: 0, changed: false, closed: true},
  {hour: 16, available: 0, changed: false, closed: true},
  {hour: 17, available: 0, changed: false, closed: true},
  {hour: 18, available: 0, changed: false, closed: true},
  {hour: 19, available: 0, changed: false, closed: true},
  {hour: 20, available: 0, changed: false, closed: true},
  {hour: 21, available: 0, changed: false, closed: true},
  {hour: 22, available: 0, changed: false, closed: true},
  {hour: 23, available: 0, changed: false, closed: true},
  {hour: 24, available: 0, changed: false, closed: true}
]

const weekdays = ['M', 'T', 'W', 'R', 'F', 'S', 'U']

// const reformat_availability = (schedule) => {
//   let reformatted_schedule = []
//   // day of week
//   let week_day = []
//   // Iterate through days of week
//   for (let i = 0; i < 127; i++) {
//     console.log(i)
//     if (i%18 == 0 && i != 0) {
//       reformatted_schedule.push(week_day)
//       week_day = []
//     }
//     let employee_pref = schedule[i]
//     // handling mod 18
//     week_day.push({hour: (i%18) + 1, available: employee_pref, changed: false, closed: false})
//   }
//   return reformatted_schedule
// }

const reformat_availability = (schedule) => {
  let reformatted_schedule = []
  let week_day = []
  let current_week = 0
  for (let i = 0; i < 127; i++) {
    if (i%18 == 0 && i != 0) {
      reformatted_schedule.push(week_day)
      week_day = []
      current_week += 1
    }
    let employee_pref = schedule[i]
    let shift;
    switch (current_week) {
      case 0:
        shift = sunDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 1:
        shift = monDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 2:
        shift = tuesDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 3:
        shift = wedDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 4:
        shift = thursDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 5:
        shift = friDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 6:
        shift = satDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      default:
        break;
    }
  }
  return reformatted_schedule
}

const reformat_sched = (schedule) => {
  let reformatted_schedule = []
  let week_day = []
  let current_week = 0
  for (let i = 0; i < 127; i++) {
    if (i%18 == 0 && i != 0) {
      reformatted_schedule.push(week_day)
      week_day = []
      current_week += 1
    }
    let employee_pref = schedule[i]
    switch (current_week) {
      case 0:
        week_day.push(employee_pref)
        break;
      case 1:
        week_day.push(employee_pref)
        break;
      case 2:
        week_day.push(employee_pref)
        break;
      case 3:
        week_day.push(employee_pref)
        break;
      case 4:
        week_day.push(employee_pref)
        break;
      case 5:
        week_day.push(employee_pref)
        break;
      case 6:
        week_day.push(employee_pref)
        break;
      default:
        break;
    }
  }
  return reformatted_schedule
}

/**
 * Gets the availablity of a specific person
 * @param {*} netid 
 */
export const get_availability = (netid) => {
  return (dispatch) => {
    // Makes a GET call, fetching employee availability preferences
    resource('GET', 'employee/available/'+netid).then(schedule => {
      // Reformat schedule
      let reformatted = reformat_availability(schedule)
      console.log("this is the reformated schedule: " + reformatted)
      dispatch({
        type: "GET_AVAILABILITY",
        schedule: reformatted
      })
      dispatch(check_hours_filled()) // Call this once availability schedule is set 
    })
  }
}

export const getAvailability = (netid) => {
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
    console.log(schedule);
    dispatch({
      type: "GET_AVAILABILITY_NEW",
      schedule
    })
  }
}

export const get_scheduled = (netid) => {
  return (dispatch) => {
    // Makes a GET call, returns array of True False values, dependending on whether employee is scheduled
    resource('GET', 'employee/scheduled/'+netid).then(schedule => {
      // Reformat data
      let reformatted = reformat_sched(schedule)
      dispatch({
        type: "GET_SCHEDULED",
        schedule: reformatted
      })
    })
  }
}

export const toggle_availability = (dayname, hour, available) => {
  return (dispatch) => {
      // Fire off update to hours_filled
      dispatch({
        // Directs to specific case in reducer
        type: "CHANGE_HOUR_"+dayname,
        hour: hour,
        // On click, available will change to the next type (red -> grey -> green -> yellow -> orange)
        available: available,
        changed: true
      })
      dispatch(check_hours_filled());
  }
}

export const reset_changes = () => {
  return (dispatch) => dispatch({
    type: "RESET_CHANGED_PROPERTY"
  })
}

export const save_availability = (netid, shifts) => {
  return (dispatch) => {
    console.log(shifts)
    let payload = {shifts: shifts};
    // Send a put call to backend
    resource('PUT', 'employee/available/'+netid, payload).then(schedule => {
      // If changes are saved, set shift 'changed' properties to false
      dispatch(reset_changes())
      console.log("Reset Changes!")
      // If changes return 200, indicate that to user
      dispatch({
        type: "SAVE_AVAILABILITY",
        success: true
      })
    })
    .catch((err) => {
      console.log(err)
      console.log("Changes Not Implemented :(")
      dispatch({
        type: "SAVE_AVAILABILITY",
        success: false
      })
    })
  }
}

export const check_hours_filled = () => {
  return (dispatch) => dispatch({
    type: "CHECK_HOURS_FILLED"
  })
}

// export const
