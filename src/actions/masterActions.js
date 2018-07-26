import { client } from "../index";
// GraphQL
import { MasterScheduleQuery } from '../graphql/queries/master.graphql';
import { MasterScheduledMutation } from '../graphql/mutations/master.graphql';

/**
 * Created by Will and Josh on 11/19/2017.
 */

// New Beginning
/*
Function: 
Get the master schedule outline
*/
export const initializeMasterSchedule = () => {
    return async (dispatch) => {
        // Fetch availabilities
        const promise = await client.query({
            query: MasterScheduleQuery
        });
        // Pull out schedule from fulfilled promise
        const schedule = promise.data.schedules[0];
        // Send to reducer
        return dispatch({
            type: "GET_MASTER_SCHEDULE",
            schedule
        });
    }
}

/*
Function: 
Get the scheduled & availabilities of all users for given shift
Params:
 @param shiftId: String representing id of shift
*/
export const getShiftInfo = (shiftId) => {
    return async (dispatch) => {
        // Fetch info
        const shiftInfo = await client.query({
            query: MasterShiftQuery,
            variables: {
                shiftId
            }
        });
        // Send to reducer
        return dispatch({
            type: "GET_SHIFT_INFO",
            shiftInfo
        });
    }
}

/*
Function: 
Get scheduled users for a given shift
Params:
 @param shiftId: String representing id of shift
*/
export const getUsersScheduled = (shiftId) => {
    return async (dispatch) => {
        // Fetch scheduled
        const scheduledArray = await client.query({
            query: MasterScheduledQuery,
            variables: {
                shiftId
            }
        });
        // Send to reducer
        return dispatch({
            type: "GET_SHIFT_SCHEDULED",
            scheduledArray
        });
    }
}

/*
Function: 
Save scheduled users for a given shift
Params:
 @param scheduledUsersIds: Array containing scheduled user ids
*/
export const saveUsersScheduled = (scheduledUsersIds) => {
    return async (dispatch) => {
        // Mutate scheduled
        const message = await client.mutate({
            mutation: MasterScheduledMutation,
            variables: {
                scheduledUsersIds
            }
        });
        // Send changes to reducer
        return dispatch({
            type: "SAVE_SCHEDULED_USERS",
            message
        });
    }
}

export const setShiftId = (shiftId) => {
    return (dispatch) => {
        return dispatch({
            type: "SET_SHIFT_ID",
            shiftId
        })
    }
}

// Helper function for sortAvailabilities
const splitAvailabilities = (availabilities) => {
    var sortedAvailabilities = {};
    for (var priority = 1; priority <= 4; priority++) {
        var filteredPriorities = availabilities.filter((availabilityObject) => {
            // Pulls out availability and corresponding netid from user object
            var { availability } = availabilityObject;
            // Check if availability matches current priority
            return availability == priority;
        });
        // Creates object property with corresponding Priority (ex: Priority1)
        sortedAvailabilities[`Priority${priority}`] = filteredPriorities.map((availabilityObject) => {
            // We only want user object from each availabilityObject
            return availabilityObject.user;
        })
    };
    return sortedAvailabilities;
}

export const sortAvailabilities = (availabilities) => {
    return (dispatch) => {
        var sortedAvailabilities = splitAvailabilities(availabilities);
        return dispatch({
            type: "SORT_AVAILABILITIES",
            sortedAvailabilities
        })
    }
}

export const updateScheduled = (user) => {
    return (dispatch) => {
        return dispatch({
            type: "UPDATE_SCHEDULED",
            user
        })
    }
}

export const setScheduled = (scheduled) => {
    return (dispatch) => {
        return dispatch({
            type: "SET_SCHEDULED",
            scheduled
        });
    }
}

export const resetActiveShift = () => {
    return (dispatch) => {
        return dispatch({
            type: "RESET_ACTIVE_SHIFT"
        });
    }
}

export const saveScheduled = () => {
    return async (dispatch, getState) => {
        // Initially set progress circle
        dispatch({
            type: "SAVE_SCHEDULED_PREPARING"
        });
        // Get currently scheduled users
        var { shift, scheduled } = getState().mCal.newActiveShiftReducer;
        // Prepare user objects for mutation
        scheduled = scheduled.map((user) => {
            return { netid: user.netid };
        });
        // Save through mutation to GraphQL
        const promise = await client.mutate({
            mutation: MasterScheduledMutation,
            variables: {
                shift,
                scheduled
            }
        });
        return dispatch({
            type: "SAVE_SCHEDULED_FINISHED",
        })
    }
}

// End of new