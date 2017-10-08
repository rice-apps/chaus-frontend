/**
 * Created by Jeffr on 7/26/2017.
 */

export const url =  'http://localhost:3000';
import {get_netids} from './userActions'
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


export const get_week = () => {
    return (dispatch) => {
        dispatch(get_day('mon'))
        dispatch(get_day('tues'))
        dispatch(get_day('wed'))
        dispatch(get_day('thurs'))
        dispatch(get_day('fri'))
        dispatch(get_day('sat'))
        dispatch(get_day('sun'))
        dispatch(get_netids())
    }
}

export const get_day = (key) => {
    return (dispatch) => {
        resource('GET', key).then(r => {
            const actionType = "get_" + key.toString()
            const action = {type : actionType}
            switch (key) {
                case 'mon':
                    action.mon = r.mon
                case 'tues':
                    action.tues = r.tues
                case 'wed':
                    action.wed = r.wed
                case 'thurs':
                    action.thurs = r.thurs
                case 'fri':
                    action.fri = r.fri
                case 'sat':
                    action.sat = r.sat
                case 'sun':
                    action.sun = r.sun
            } dispatch(action)
        })
    }
}