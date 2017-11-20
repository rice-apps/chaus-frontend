/**
 * Created by Jeffr on 7/26/2017.
 */

// export const url =  'http://localhost:3000';
import { resource } from './masterActions'
import {get_netids} from './userActions'



export const get_week = () => {
    return (dispatch) => {
        // dispatch(get_day('mon'))
        // dispatch(get_day('tues'))
        // dispatch(get_day('wed'))
        // dispatch(get_day('thurs'))
        // dispatch(get_day('fri'))
        // dispatch(get_day('sat'))
        // dispatch(get_day('sun'))
        dispatch(get_netids())
    }
}

// export const get_day = (key) => {
//     return (dispatch) => {
//         resource('GET', key).then(r => {
//             const actionType = "get_" + key.toString()
//             const action = {type : actionType}
//             switch (key) {
//                 case 'mon':
//                     action.mon = r.mon
//                 case 'tues':
//                     action.tues = r.tues
//                 case 'wed':
//                     action.wed = r.wed
//                 case 'thurs':
//                     action.thurs = r.thurs
//                 case 'fri':
//                     action.fri = r.fri
//                 case 'sat':
//                     action.sat = r.sat
//                 case 'sun':
//                     action.sun = r.sun
//             } dispatch(action)
//         })
//     }
// }
