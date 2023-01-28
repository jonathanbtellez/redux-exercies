import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../reducers/filterReducer";
import { todosReducer } from "../reducers/todosReducer";
import { userReducer } from "../reducers/userReducer";


export default configureStore({
    reducer: {
        todosState: todosReducer,
        filterState: filterReducer,
        // Async example login reducer
        userState: userReducer
    }
})

