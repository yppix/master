import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer";
import {createLogger} from "redux-logger";
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk"
import {todosReducer} from "./reducers/todoReducer";
import {registrationReducer} from "./reducers/registrationReducer";
import {loginReducer} from "./reducers/loginReducer";
import {logoutReducer} from "./reducers/logoutReducer";


const logger = createLogger({
    predicate: (getState, action) => action.type === 'deleteChat'
});

const mixReducers = (combineReducers({
    chats: chatReducer,
    todos: todosReducer,
    registration: registrationReducer,
    login: loginReducer,
    logout: logoutReducer
}));

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, mixReducers);

export const store = createStore(persistedReducer , applyMiddleware(thunk, logger))
export const persistor = persistStore(store)
