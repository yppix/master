import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer";
import {createLogger} from "redux-logger";
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [];

const logger = createLogger({
    predicate: (getState, action) => action.type === 'deleteChat'
});


const timer = store => next => action => {
    if (action.type === 'deleteChat') {
        let delay = action?.meta?.delay;
        if (!delay){
            next(action);
        }
        let delayTime = setTimeout(()=> next(action), delay);
        return () => {clearTimeout(delayTime)};
    }
    next(action)
}

 middlewares.push(logger)
 middlewares.push(timer);

const mixReducers = (combineReducers({
    chats: chatReducer
}));

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, mixReducers);

export const store = createStore(persistedReducer , applyMiddleware(...middlewares))
export const persistor = persistStore(store)
