import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from './module/user'
export default configureStore({
    reducer: {
        user: useReducer,
    },
})
