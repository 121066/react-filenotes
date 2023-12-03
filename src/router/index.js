import Home from '../pages/Home'
import FileText from '../pages/FileText'
import LayoutManager from '../layout'
import { createBrowserRouter } from 'react-router-dom'
import EditorText from '../pages/EditorText'
const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutManager></LayoutManager>,
        children: [{ path: 'editorText', element: <EditorText></EditorText> }],
    },
    { path: '/home', element: <Home></Home> },
    { path: '/files', element: <FileText></FileText> },
])
export default router
