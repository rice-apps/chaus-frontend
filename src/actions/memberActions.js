/**
 * Created by Will on 7/19/2018.
 */
import { client } from '../index';
import { EmployeeCalendarQuery } from '../graphql/queries/employee.graphql';

export const initializeCalendar = (netid) => {
    // console.log(client);
    return async (dispatch) => {
        const schedule = await client.query({
            query: EmployeeCalendarQuery, 
            variables: { netid }
        });
        return dispatch({
            type: "INITIALIZE_CALENDAR",
            schedule
        })
    }
}

export const selectPreference = (shift, preference) => {
    return (dispatch) => {
        // TODO: Get Netid from Different Action
        return dispatch({
            type: "SELECT_PREFERENCE",
            shift,
            preference
        })
    }
}

export const savePreferences = (netid) => {
    return (dispatch) => {
        return dispatch({
            type: "SAVE_PREFERENCES",
            netid
        })
    }
}