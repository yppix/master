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
        default:
            return state;
    }
}