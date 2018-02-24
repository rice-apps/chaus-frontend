/**
Created by Will on 2/17/18
 */
import { resource } from './masterActions'

const reformat_availability = (schedule) => {
  let reformatted_schedule = []
  // Iterate through days of week 
  for (let i = 1; i < 8; i++) {
    // day of week
    week_day = []
    // Iterate through 18 hours we are tracking
    for (let j = 1; j < 19; j++) {
      current_hour = i * j
      employee_pref = schedule[current_hour]
      week_day.push({hour: current_hour, available: employee_pref, changed: false, closed: false})
    }
    reformatted_schedule.push(week_day)
  }
  return reformatted_schedule
}

export const get_availability = () => {
  return (dispatch) => {
    // Makes a GET call, fetching employee availability preferences
    resource('GET', 'employee/available/'+netid).then(schedule => {
      console.log(schedule)
      // Reformat schedule
      reformatted = reformat_availability(schedule)
      dispatch({
        type: "GET_AVAILABILITY",
        schedule
      })
    })
  }
}

export const get_scheduled = () => {
  return (dispatch) => {
    // Makes a GET call, returns array of True False values, dependending on whether employee is scheduled
    resource('GET', 'employee/scheduled'+netid).then(schedule => {
      // Reformat data
      reformatted = reformat_scheduled(schedule)
      dispatch({
        type: "GET_SCHEDULED",
        schedule
      })
    })
  }
}