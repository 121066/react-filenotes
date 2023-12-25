import { useNavigate, useSearchParams, useParams } from 'react-router-dom'

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
            <div>文本标签</div>
        </>
    )
}
export default FileText
