const initialState = {
    profileInit: {
        name: '',
        email: '',
        contact: ''
    }
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case 'deleteChat':
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload)
            }
        case 'addChat':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        case 'addMsg':
            return {
                ...state,
                speaks: [...state.speaks, action.payload]
            }
        default:
            return state;
    }
}