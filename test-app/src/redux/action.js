export const deleteChat = (id) => ({
    type: 'deleteChat',
    payload: id,
    meta: {
        delay: 3000
    }
})

export const addChat = (obj) => ({
    type: 'addChat',
    payload: obj
})

export const sendingMessage = (obj) => ({
    type:'addMsg',
    payload: obj
})