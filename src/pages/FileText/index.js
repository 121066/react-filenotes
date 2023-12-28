import { useNavigate, useSearchParams, useParams } from 'react-router-dom'
import './index.scss'
import FormItemList from '@/components/formItem'
function FileText() {
    const navigate = useNavigate()
    // console.log(navigate())
    const [searchParams] = useSearchParams()
    const ids = searchParams.get('id') || ''
    console.log(ids)
    let { id } = useParams()
    console.log(id)
    return (
        <>
            <div className="text">文本标签</div>
            <FormItemList></FormItemList>
        </>
    )
}
export default FileText
