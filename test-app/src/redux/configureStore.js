import {combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer";

export const store = createStore(combineReducers({
    chats: chatReducer
})
);