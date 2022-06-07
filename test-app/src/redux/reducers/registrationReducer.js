import * as types from "../actions/actionTypes"

const initialState = {
    currentUser: null
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type){
        case types.REGISTER_START:
            return {
                ...state
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case types.REGISTER_ERROR:
            return {
                ...state,
                error: action.payload
            }
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