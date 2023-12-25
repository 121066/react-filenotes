import axios from 'axios'
import { getToken, removeToken } from './token'
import router from 'router'
const request = axios.create({
    baseURL: 'https://dbyxs.xyz:8002',
    timeout: 5000,
})
request.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    },
)
request.interceptors.response.use(
    (config) => {
        return response.data
    },
    (err) => {
        if (err.response.status === 401) {
            removeToken()
            router.navigate('/login')
            window.location.reload()
        }
        return Promise.reject(err)
    },
)
export { request }
