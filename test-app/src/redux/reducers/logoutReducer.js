import * as types from "../actions/actionTypes"
import {userSelector} from "./selectors";

export const logoutReducer = (state = userSelector, action) => {
    switch (action.type){
        case types.LOGOUT_START:
            return {
                ...state
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}