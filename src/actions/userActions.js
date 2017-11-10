/**
 * Created by Jeffr on 7/18/2017.
 */
export const url =  'http://localhost:3000';
const resource = (method, endpoint, payload) => {
    // console.log("THE ENDPOINT: " + endpoint + "\n" + "THE PAYLOAD: " + payload + "\n" + "THE METHOD: " + method)
    const options =  {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (payload) options.body = JSON.stringify(payload)

    // console.log('The options for ', endpoint, options)
    // console.log('The url: ',`${url}/${endpoint}`)
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


export const selectUser = (netid) => {
    console.log("SELECT USER: ", netid)
    return (dispatch) => {
        // dispatch(get_availability(netid));
        resource('GET', 'user/'+netid).then( r => {
            return dispatch({
                type: "USER_SELECTED",
                user: r[0]
            })
        })
    }

}

export const get_netids = () => {
    return (dispatch) => {
        resource('GET', 'netids').then( r => {
            console.log(r)
            dispatch({
                type: "GET_NETIDS",
                netids: r
            })
        })
    }
}

export const get_availability = (netid) => {
  return (dispatch) => {
    resource('GET', 'master/available/'+netid).then( schedule => {
      console.log(schedule)
      schedule.map(day => {
        var weekLetter = Object.keys(day)[0]
        day.map(h => {
          dispatch({
            type:"CHANGEHOUR"+weekLetter,
            hour:h,
            boolean:true
          })
        })
      })
    })
  }
}
