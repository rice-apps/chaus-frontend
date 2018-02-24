/**
Created by Will on 2/17/18
 */
import { resource } from './masterActions'

const reformat_availability = (schedule) => {
  let reformatted_schedule = []
  // day of week
  let week_day = []
  // Iterate through days of week
  for (let i = 0; i < 127; i++) {
    console.log(i)
    if (i%18 == 0 && i != 0) {
      reformatted_schedule.push(week_day)
      week_day = []
    }
    let employee_pref = schedule[i]
    // handling mod 18
    week_day.push({hour: (i%18) + 1, available: employee_pref, changed: false, closed: false})
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
      let reformatted = reformat_scheduled(schedule)
      dispatch({
        type: "GET_SCHEDULED",
        schedule: reformatted
      })
    })
  }
}
