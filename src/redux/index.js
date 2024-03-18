import { configureStore } from '@reduxjs/toolkit'
import userReducer from './module/user'
import goodslist from './module/goodslist'
export default configureStore({
    reducer: {
        user: userReducer,
        goodslist: goodslist
    },
})
