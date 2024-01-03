import { useNavigate, useSearchParams, useParams } from 'react-router-dom'
import './index.scss'
import FormItemList from '@/components/formItem'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
const opt = [
    {
        type: 'input',
        name: 'taskName',
        label: '任务名称',
        size: 'mini',
        span: 6,
        options: [{ label: '添加', value: '1' }],
        disabled: true,
        rules: [{ required: true, message: '请输入验证码' }],
    },
    {
        type: 'input',
        name: 'taskType',
        label: '任务类型',
        size: 'mini',
        span: 6,
    },
]
function ItemList() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('执行一次', count)
    }, [])
    return <>测试useEffect1</>
}
function ItemLists() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('测试useEffect2', count)
    })
    return <>测试useEffect2</>
}
function FileText() {
    const [opts, setOpt] = useState(opt)
    const navigate = useNavigate()
    // console.log(navigate())
    const [searchParams] = useSearchParams()
    const ids = searchParams.get('id') || ''
    console.log(ids)
    let { id } = useParams()
    console.log(id)
    const initFormData = (e) => {
        console.log(e)
    }
    const [count, setCount] = useState(0)
    const addInit = () => {
        setCount((e) => e + 1)
    }
    const [flag, setFlag] = useState(false)
    return (
        <>
            <div className="text">文本标签</div>
            <Button onClick={addInit}>点击加{count}</Button>
            <FormItemList initFormData={initFormData} opt={opts}></FormItemList>
            <ItemLists></ItemLists>
            <ItemList></ItemList>
            {flag && <h1>欢迎回来</h1>}
            {!flag && <h1>请登录</h1>}
            <Button type='primary' onClick={() => setFlag(!flag)}>{flag ? '退出' : '登录'}</Button>
        </>
    )
}
export default FileText
