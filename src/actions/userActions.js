/**
 * Created by Jeffr on 7/18/2017.
 */
import { resource } from './masterActions'
import { get_availability, get_scheduled } from './employeeActions'
import { getUserInfo } from './authActions';


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
          console.log("USER OBJECT: " + JSON.stringify(r[0]))
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

export const initializeUser = () => {
  console.log("INITIALIZE USER");
  return (dispatch) => {
    dispatch(getUserInfo());
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
Input: netid, firstName, lastName
Output: Creates user with given netid
Backend Call: /add/:netid
*/
export const add_user = (netid, firstName, lastName) => {
  return (dispatch) => {
    // Create payload
    let payload = {firstName, lastName, totalHours: 0};
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

/*
Set idealHour/maxHour on backend for user
url: /api/idealHour || /api/maxHour
Inputs: 
  - netid (String)
  - integer
  - String specifiying min || max
*/
export const setHours = (netid, hours, idealOrMax) => {
  return (dispatch) => {
    switch (idealOrMax) {
      case 'ideal':
        resource('PUT', `idealHour/${netid}`, {idealHour: hours})
        .then((user) => {
          // First adjust active user ideal hours
          dispatch({
            type: "ACTIVEUSER_IDEAL_HOUR_UPDATE",
            hours
          })
          // then update entire list
          return dispatch({
            type: "USER_HOUR_UPDATE",
            user
          })
        })
        break;
      case 'max':
        resource('PUT', `maxHour/${netid}`, {maxHour: hours})
        .then((user) => {
          // First update active user
          dispatch({
            type: "ACTIVEUSER_MAX_HOUR_UPDATE",
            hours
          })
          return dispatch({
            type: "USER_HOUR_UPDATE",
            user
          })
        })
        break;
      case 'total':
        resource('PUT', `totalHours/${netid}`, {totalHours: hours})
        .then((success) => {
          return dispatch({
            type: "USER_TOTAL_HOURS_UPDATE"
          });
        })
        break;
      default:
        console.log("Wrong value, pal")
        break;
    }
  }
}

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
