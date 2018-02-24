/**
 * Created by Jeffr on 7/18/2017.
 */
import { resource } from './masterActions'



export const selectUser = (netid) => {
    return (dispatch) => {
        dispatch(get_availability(netid));
        dispatch(get_schedule(netid));
        resource('GET', 'user/'+netid).then( r => {
            return dispatch({
                type: "USER_SELECTED",
                user: r[0]
            })
        })
    }

}

export const get_users = () => {
    return (dispatch) => {
        resource('GET', 'users/').then( r => {
            dispatch({
                type: "GET_USERS",
                all_users: r
            })
        })
    }
}

export const toggle_availability = (dayname, hour, availability, changed) => {
  return (dispatch) => dispatch({
    type: "CHANGE_HOUR_"+dayname,
    hour: hour,
    available: !availability,
    changed: changed
  })
}

export const save_changes = (week, netid) => {
  return (dispatch) => {
    resource('PUT', 'master/update/availability/'+netid, week).then( info => {
      dispatch({
        type: "CHANGES_SAVED",
        changes_saved: true
      })
    })
  }
}

export const get_availability = (netid) => {
    return (dispatch) => {
        resource('GET', 'master/available/'+netid).then( schedule => {
            schedule.map(day => {
                Object.keys(day).map(weekLetter => {
                    dispatch({
                       type:"CHANGE"+weekLetter,
                       state:day[weekLetter]
                    })
                })
            })
        })
    }
}

export const get_schedule = (netid) => {
    return (dispatch) => {
        resource("GET", "master/schedule/" + netid).then((schedule) => {
            let masterObj = {M:[], T:[], W:[], R:[], F:[], S:[], U:[]}

            schedule.map((dayObj) => {
                Object.keys(dayObj).map(key => {
                    let arr = []
                    dayObj[key].map(hourObj => {
                            if (hourObj.schedule) {
                                arr.push(hourObj.hour)
                            }
                        }
                    )
                    masterObj[key] = arr

                })

            })
            dispatch({
                type:"GENERATE",
                schedule: masterObj
            })
        })

    }
}