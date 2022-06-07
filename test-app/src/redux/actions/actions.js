import * as types from "./actionTypes"
import {auth} from "../../firebase";
import {createUserWithEmailAndPassword} from "@firebase/auth";

export const registerStart = () => ({
    type: types.REGISTER_START,
})

export const registerSuccess = (data) => ({
    type: types.REGISTER_SUCCESS,
    payload: data
})

export const registerError = (err) => ({
    type: types.REGISTER_ERROR,
    payload: err
})

export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({displayName});
                dispatch(registerSuccess(user))
            })
            .catch((err) => dispatch(registerError(err.message)))
    }
}

export const loginStart = () => ({
    type: types.LOGIN_START,
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

export const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err
})

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((err) => dispatch(loginError(err.message)))
    }
}

export const logoutStart = () => ({
    type: types.LOGOUT_START,
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})

export const logoutError = (err) => ({
    type: types.LOGOUT_ERROR,
    payload: err
})

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart());
        auth
            .signOut()
            .then((resp) => {
                dispatch(logoutSuccess())
            })
            .catch((err) => dispatch(logoutError(err.message)))
    }
}

export const getData = (data) => ({
    type: 'GET_TODOS',
    payload: data
})

export const errorTodos = (e) => ({
    type: 'ERROR_TODOS',
    payload: e
})

export const loadingData = () => ({
    type: 'LOADING_TODOS'
})