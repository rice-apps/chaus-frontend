/**
 * Created by Jeffr on 7/18/2017.
 */
import { resource } from './masterActions'
import { get_availability, get_scheduled } from './employeeActions'


/**
 * 
 * @param {selectedUser} netid 
 */
export const selectUser = (netid) => {
    console.log("SELECT USER CALLED")
    return (dispatch) => {
        dispatch(get_availability(netid));
        dispatch(get_scheduled(netid));
        console.log("Selected User" + netid)
        
        resource('GET', 'user/'+netid).then( (r) => {
          console.log("USER OBJECT: " + r)
            return dispatch({
                type: "USER_SELECTED",
                user: r[0]
            })
        })
    }

}

export const initializeStates = () => {
    console.log("INITIALIZE STATES")
    return (dispatch) => {
        resource('GET', 'users').then( (r) => {
            return dispatch({
                type: "GET_USERS",
                users: r
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
    resource('PUT', 'master/update/availability/'+netid, week).then( (info) => {
      dispatch({
        type: "CHANGES_SAVED",
        changes_saved: true
      })
    })
  }
}

// Add & Drop Users

/*
Input: netid, firstName, lastName, minHour, maxHour
Output: Creates user with given netid
Backend Call: /add/:netid
*/
export const add_user = (netid, firstName, lastName, minHour = 8, maxHour = 16) => {
  return (dispatch) => {
    // Create payload
    let payload = {firstName, lastName, minHour, maxHour, totalHours: 0};
    console.log(payload);
    resource('PUT', 'add/'+netid, payload).then( (users) => {
      console.log(users);
      if (typeof(users) == String) {
        dispatch({
          type: "CREATE_USER_FAILED",
        })
      }
      else {
        // info is returned data from backend: entire user list
        dispatch({
          type: "CREATE_USER_SUCCESS",
          netid,
          users
        })
      }
    })
  }
}

// export const logged_in = () => {
//   return (dispatch) => {
//     let user = {};
//     if (localStorage.getItem('current_user')) {
//       user = localStorage.getItem('current_user');
//     }
//     dispatch({
//       type: "LOGGED_IN",
//       user
//     })
//   }
// }

/*
Input: netid
Output: Deletes user from DB with given netid
Backend Call: /remove/:netid
*/
export const remove_user = (netid) => {
  return (dispatch) => {
    resource('GET', 'remove/'+netid).then( (users) => {
      if (!users) {
        dispatch({
          type: "DELETE_USER_FAILED"
        })
      }
      else {
        dispatch({
          type: "DELETE_USER_SUCCESS",
          netid,
          users
        })
      }
    })
  }
}

// export const authenticate = (ticket) => {
//   console.log("INSIDE AUTHENTICATED")
//   return (dispatch) => {
//     let url = 'https://idp.rice.edu/idp/profile/cas/login';
//     resource('GET', `${url}/auth?ticket=${ticket}`).then( res => {
//       let result = res.json();
//       if (result && result.success) {
//         localStorage.setItem('current_user', JSON.stringify(result));
//       }
//       else {
//         console.log("Auth Failed");
//       }
//       dispatch(logged_in);
//     })
//   }
// }

// export const get_availability = (netid) => {
//     return (dispatch) => {
//         resource('GET', 'employee/available/'+netid).then( schedule => {
//             schedule.map(day => {
//                 Object.keys(day).map(weekLetter => {
//                     dispatch({
//                        type:"CHANGE"+weekLetter,
//                        state:day[weekLetter]
//                     })
//                 })
//             })
//         })
//     }
// }

// export const get_schedule = (netid) => {
//     return (dispatch) => {
//         resource("GET", "employee/schedule/" + netid).then((schedule) => {
//             let masterObj = {M:[], T:[], W:[], R:[], F:[], S:[], U:[]}
//
//             schedule.map((dayObj) => {
//                 Object.keys(dayObj).map(key => {
//                     let arr = []
//                     dayObj[key].map(hourObj => {
//                             if (hourObj.schedule) {
//                                 arr.push(hourObj.hour)
//                             }
//                         }
//                     )
//                     masterObj[key] = arr
//
//                 })
//
//             })
//             dispatch({
//                 type:"GENERATE",
//                 schedule: masterObj
//             })
//         })
//
//     }
// }
