import Home from '../pages/Home'
import FileText from '../pages/FileText'
import LayoutManager from '../layout'
import { createBrowserRouter } from 'react-router-dom'
import EditorText from '../pages/EditorText'
import { Suspense, lazy } from 'react'
const FormItem = lazy(() => import('../pages/FormItem'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutManager></LayoutManager>,
        children: [{ path: 'editorText', element: <EditorText></EditorText> }],
    },
    { path: '/home', element: <Home></Home> },
    { path: '/files/:id', element: <FileText></FileText> },
    {
        path: '/formItem',
        element: (
            <Suspense>
                <FormItem></FormItem>
            </Suspense>
        ),
    },
])
export default router
