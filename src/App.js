import { useEffect, useState } from 'react'
import { Button, ConfigProvider } from 'antd'
import LayoutManager from './layout'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import store from '@/redux/index.js'
import zhCN from 'antd/locale/zh_CN'
import './index.css'
import 'normalize.css'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
// import moment from 'moment'
// import 'moment/locale/zh-cn'
// moment.locale('zh-cn')
const InitCretet = () => {
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
    }
    const reduce = () => {
        setCount(count - 1)
    }
    useEffect(() => {
        fetch('http://localhost:3080/file', {
            method: 'post',
            body: JSON.stringify({ name: '奥铃', age: 28 }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res, '输')
            })
    }, [])

    return (
        <>
            <div>测试{count}</div>
            <Button type="primary" onClick={add}>
                增加
            </Button>
            <Button type="primary" onClick={reduce}>
                减少
            </Button>
        </>
    )
}
function App() {
    console.log('执行1')
    return (
        <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <RouterProvider router={router}>
                    <div className="App">
                        <LayoutManager></LayoutManager>
                    </div>
                </RouterProvider>
            </Provider>
        </ConfigProvider>
    )
}

export default App
