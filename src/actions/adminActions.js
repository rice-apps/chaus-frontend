// Imports
// GraphQL Imports

export const showUserDetail = (user) => {
    return async (dispatch) => {
        dispatch({
            type: "ADMIN_SHOW_USER_DETAIL",
            user
        });
    }
}