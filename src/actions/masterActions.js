import { setHours } from "./userActions";

/**
 * Created by Will and Josh on 11/19/2017.
 */
// export const url =  'http://riceapps.org:3240';
export const url =  'http://localhost:3000/api';
//export const url =  'https://chaus-backend.herokuapp.com';
// export const url =  'http://localhost:3000';

export const resource = (method, endpoint, payload) => {
    const options =  {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (payload) options.body = JSON.stringify(payload)

    return fetch(`${url}/${endpoint}`, options)
        .then(r => {
            if (r.status === 200) {
                return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
            } else {
                // useful for debugging, but remove in production
                console.error(`${method} ${endpoint} ${r.statusText}`)
                throw new Error(r.statusText)
            }
        })
        .catch(err => console.error(err))
}

const update_user_total_hours = (netid, hour_obj) =>{
  return new Promise((resolve, reject) => {
    resource('GET', 'master/hourtotal/'+netid).then(r => {
        var new_total = hour_obj.total + Number(r);
        hour_obj = {...hour_obj, total: new_total}
        console.log("hope this works", JSON.stringify(hour_obj))
        console.log("total", JSON.stringify(hour_obj.total))
        resolve(hour_obj)
    });
  })
}

const create_users_hours = () =>{
  return new Promise((resolve, reject) => {
    var userHrs = {};
    resource('GET', 'users').then(r => {
        console.log("RRRR: ", r)
        Promise.all(r.map((user) => {userHrs[user.netid] = update_user_total_hours(user.netid,
            {max: user.maxHour,
            ideal: user.idealHour,
            total: 0})
        }))
        .then(() => {
          resolve(userHrs);
        });
    });
  })
}



export const open_modal = (dayname, hour) => {
    return (dispatch) => {
        console.log("open_modal called")
        console.log(dayname, hour.hour)
        resource('GET', 'master/shift/'+ dayname + '/' + (hour.hour - 7)).then( r => {
            console.log("PLEASE WORK")
            create_users_hours()
            .then((promise) => {
              var user_hours = {}
              Promise.all(Object.values(promise)).then((promises) => {
                console.log(promises)
                Object.keys(promise).forEach((key, index) => {
                  user_hours[key] = promises[index]
                  let netid = key;
                  let hours = promises[index].total
                  dispatch(setHours(netid, hours, 'total'))
                })
                console.log("user hour object", user_hours)
                return dispatch({
                    type: "SHIFT_SELECTED",
                    p1: r[1],
                    p2: r[2],
                    p3: r[3],
                    p4: r[4],
                    schedule: r.scheduled,
                    hour: r.hour,
                    open: true,
                    dayname: dayname,
                    userHours: user_hours
                })
              })

            })
        })
    }}


export const check_hours = (dayname, hour) => {
    return (dispatch) => {
        resource('GET', 'master/shift/'+ dayname + '/' + (hour.hour - 7)).then( r => {
            console.log("HOURS BEING CHECKED")
            return dispatch({
                type: "RENDER_PAGE",
                shift: (dayname * 18) + hour.hour,
                full: ([r.scheduled].length >= 3)
            })
        })
    }

}

export const get_hour_totals = () => {
    return (dispatch) => {
        resource('GET', 'master/schedule').then( r => {
            dispatch({
                type: "CHECK_TOTALS",
                shifts: r.week
            })
        })
    }

}

export const close_modal = () => {
    return (dispatch) => {
            dispatch(get_hour_totals())
            return dispatch({
                type: "CLOSE_MODAL",
                modal_open: false,
            })
    }
}

export const toggle_scheduled = (netid) => {
  console.log("inside action")
  return (dispatch) => {
            return dispatch({
                type: "TOGGLE_SCHEDULED",
                netid: netid
            })
  }
}

export const save_shift = (schedule, p1, p2, p3, p4, weekday, hour) => {
    const payload = {"p1": p1, "p2": p2, "p3": p3, "p4": p4, "schedule": schedule, "weekday": weekday, "hour": hour}
    return (dispatch) => {
        resource('PUT', 'master/update/'+weekday +'/'+hour, payload).then( info => {
            dispatch({
                type: "SHIFT_SAVED",
                changes_saved: true
            })
        })
    }
}
