import Home from '../pages/Home'
import FileText from '../pages/FileText'
import LayoutManager from '../layout'
import { createBrowserRouter } from 'react-router-dom'
import EditorText from '../pages/EditorText'
import { Suspense, lazy } from 'react'
import AuthRoute from '../components/AuthRoute'
const Login = lazy(() => import('../pages/Login')) // 登录模块
const FormItem = lazy(() => import('../pages/FormItem')) // 表单模块
const Settings = lazy(() => import('../pages/Setting')) //设置模块
const GoodsList = lazy(() => import('../pages/GoodsList')) //商品模块
const Chart = lazy(() => import('../pages/Chart')) //图表模块
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthRoute>
                <LayoutManager></LayoutManager>
            </AuthRoute>
        ),
        children: [{ path: 'editorText', element: <EditorText></EditorText> }],
    },
    { path: '/home', element: <Home></Home> },
    { path: '/files/:id', element: <LayoutManager></LayoutManager>, children: [{ path: '/files/:id', element: <FileText></FileText> }] },
    {
        path: '/formItem',
        element: (
            <Suspense>
                <FormItem></FormItem>
            </Suspense>
        ),
    },
    {
        path: '/chart',
        element: (
            <Suspense>
                <Chart></Chart>
            </Suspense>
        ),
    },
    {
        path: '/setting',
        element: (
            <Suspense>
                <Settings></Settings>
            </Suspense>
        ),
    },
    {
        path: '/goodslist',
        element: (
            <Suspense>
                <GoodsList></GoodsList>
            </Suspense>
        ),
    },
    {
        path: '/login',
        element: (
            <Suspense fallback={'加载中国'}>
                <Login></Login>
            </Suspense>
        ),
    },
])
export default router
