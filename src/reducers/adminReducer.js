import { combineReducers } from 'redux';

const userDetailReducer = (state={
    user: null
}, action) => {
    switch(action.type) {
        case "ADMIN_SHOW_USER_DETAIL":
            return {...state, user: action.user};
        default:
            return {...state};
    }
}

export default combineReducers({
    userDetailReducer
})