import {ERROR_TODOS, GET_TODOS, LOADING_TODOS} from "../actions/actionTypes";
import {errorTodos, getData, loadingData} from "../actions/actions";

const initialState = {
    todos: [],
    loading: false,
    error: null
}
export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_TODOS:
            return {
                ...state,
                loading: true
            }
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case ERROR_TODOS:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const loadTodos = () => {
    return async dispatch => {
        dispatch(loadingData())
        try {
            const response = await fetch('https://api.thedogapi.com/v1/images/search');
            const data = await response.json();
            dispatch(getData(data))
        } catch (e) {
            dispatch(errorTodos(e.toString()))
        }
    }
}