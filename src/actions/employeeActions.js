/**
Created by Will on 2/17/18
 */
import { resource } from './masterActions'

const monDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
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
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]
const tuesDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
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
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]
const wedDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
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
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]
const thursDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
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
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
]
const friDefault = [
  {hour: 7, available: 0, changed: false, closed: false},
  {hour: 8, available: 0, changed: false, closed: false},
  {hour: 9, available: 0, changed: false, closed: false},
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: true},
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
  {hour: 10, available: 0, changed: false, closed: false},
  {hour: 11, available: 0, changed: false, closed: false},
  {hour: 12, available: 0, changed: false, closed: false },
  {hour: 13, available: 0, changed: false, closed: false},
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false},
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
  {hour: 14, available: 0, changed: false, closed: false},
  {hour: 15, available: 0, changed: false, closed: false},
  {hour: 16, available: 0, changed: false, closed: false },
  {hour: 17, available: 0, changed: false, closed: false},
  {hour: 18, available: 0, changed: false, closed: false},
  {hour: 19, available: 0, changed: false, closed: false},
  {hour: 20, available: 0, changed: false, closed: false},
  {hour: 21, available: 0, changed: false, closed: false},
  {hour: 22, available: 0, changed: false, closed: false},
  {hour: 23, available: 0, changed: false, closed: false},
  {hour: 24, available: 0, changed: false, closed: false}
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
        shift = monDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 1:
        shift = tuesDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 2:
        shift = wedDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 3:
        shift = thursDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 4:
        shift = friDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 5:
        shift = satDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      case 6:
        shift = sunDefault[i%18]
        week_day.push({...shift, available: employee_pref})
        break;
      default:
        break;
    }
  }
  return reformatted_schedule
}


export const get_availability = (netid) => {
  return (dispatch) => {
    // Makes a GET call, fetching employee availability preferences
    resource('GET', 'employee/available/'+netid).then(schedule => {
      // Reformat schedule
      let reformatted = reformat_availability(schedule)
      dispatch({
        type: "GET_AVAILABILITY",
        schedule: reformatted
      })
    })
  }
}

export const get_scheduled = (netid) => {
  return (dispatch) => {
    // Makes a GET call, returns array of True False values, dependending on whether employee is scheduled
    resource('GET', 'employee/scheduled/'+netid).then(schedule => {
      // Reformat data
      // let reformatted = reformat_scheduled(schedule)
      dispatch({
        type: "GET_SCHEDULED",
        schedule: schedule
      })
    })
  }
}

export const toggle_availability = (dayname, hour, available) => {
  return (dispatch) => dispatch({
    // Directs to specific case in reducer
    type: "CHANGE_HOUR_"+dayname,
    hour: hour,
    // On click, available will change to the next type (red -> grey -> green -> yellow -> orange)
    available: (available%4)+1,
    changed: true
  })
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

// export const
