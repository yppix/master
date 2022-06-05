import * as types from "../actions/actionTypes"
import {userSelector} from "./selectors";

export const loginReducer = (state = userSelector, action) => {
    switch (action.type){
        case types.LOGIN_START:
            return {
                ...state
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}