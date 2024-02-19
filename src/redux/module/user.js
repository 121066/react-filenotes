import { createSlice } from '@reduxjs/toolkit'
import { request } from 'util'
import { getToken, setToken, removeToken } from 'util'
const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: { a: 1 },
    },
    // 同步修改方法
    reducers: {
        setTokens(state, action) {
            state.token = action.payload
            setToken(state.token)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state, action) {
            state.userInfo = {}
            removeToken()
        },
        getUserInfo(state, action) {
            return state
        }
    },
})
const userInfos = (state) => state.user
// 解构出方法
const { setTokens, setUserInfo, clearUserInfo, getUserInfo } = userStore.actions
// 解构出reducer函数
const userReducer = userStore.reducer
// 异步登录
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        // const res = await request.post('user/login', loginForm)
        let res = {
            token: 'testTOken',
        }
        dispatch(setTokens(res.token))
    }
}
const fetchUserInfo = (loginForm) => {
    return async (dispatch) => {
        let data = {
            name: 'nihao',
        }
        dispatch(setUserInfo(data))
    }
}
const fetchRemoveUserInfo = (loginForm) => {
    return async (dispatch) => {
        dispatch(clearUserInfo())
    }
}
export { fetchLogin, userInfos }
export default userReducer
