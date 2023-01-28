import {  compose, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../reducers/filterReducer";
import { todosReducer } from "../reducers/todosReducer";
import { userReducer } from "../reducers/userReducer";
import { watcherSaga } from "../sagas/sagas";
import createSagaMiddleware from 'redux-saga';


export const appAsyncStore = () => {
    
    const sagaMiddleware = createSagaMiddleware();
    
    let store = compose(configureStore({
        reducer: {
            todosState: todosReducer,
            filterState: filterReducer,
            // Async example login reducer
            userState: userReducer
            // To add a middleware you need use this function
        }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)    
    }));
    // we init the watcher saga
    sagaMiddleware.run(watcherSaga)
    return store
}
