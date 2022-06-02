export const getData = (data) => ({
    type:'GET_TODOS',
    payload: data
})

export const errorTodos = (e) => ({
    type:'ERROR_TODOS',
    payload: e
})

export const loadingData = () => ({
    type:'LOADING_TODOS'
})