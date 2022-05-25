const initialState = {
    chats: [
        {
            id: 1,
            name: 'First chat'
        },
        {
            id: 2,
            name: 'Second chat'
        },
        {
            id: 3,
            name: 'Third chat'
        }
    ],
    speaks:[
        {
            id: 1,
            chatId: 1,
            author: 'Masha',
            txt: 'Hi'
        },
        {
            id: 2,
            chatId: 1,
            author: 'Vova',
            txt: 'Hello'
        },
        {
            id: 3,
            chatId: 1,
            author: 'Masha',
            txt: 'How are you'
        },
        {
            id: 4,
            chatId: 2,
            author: 'Kirill',
            txt: 'Send me your homework'
        },
        {
            id: 5,
            chatId: 2,
            author: 'Lidia',
            txt: 'No'
        },
    ]
}

export const chatReducer = (state = initialState, action) => {
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