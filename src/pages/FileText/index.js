import { useNavigate, useSearchParams, useParams } from 'react-router-dom'
import './index.scss'
// import FormItemList from '../../components/formItem'
import { useEffect, useState, useRef, forwardRef } from 'react'
import ItemListText from './ItemListText'
import { Button } from 'antd'
import { userInfos, fetchUserInfo } from '../../redux/module/user'
import { useSelector, useDispatch } from 'react-redux'
import { useOutsideClick } from 'hooks'
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
    // const { userInfo } = useSelector(userInfos)
    // const dispatch = useDispatch()
    // const setUpdate = async () => {
    //     console.log('点击')
    //     dispatch(fetchUserInfo())
    // }
    useEffect(() => {
        // console.log('执行一次', count, userInfo)
        return () => {
            console.log('销毁')
        }
    }, [])
    return <>测试useEffect1
        {/* <Button onClick={setUpdate}>点击修改</Button> */}
    </>
}
// const ItemLists = forwardRef(() => {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         console.log('测试useEffect2', count)
//         return () => {
//             console.log('销毁测试useEffect2')
//         }
//     })
//     return <>
//         <div>测试useEffect2</div>
//         <span>span元素</span>
//     </>
// })
function ClcikElement() {
    const ref = useRef(null)
    const initClick = () => {
        console.log('点击了')
    }
    useOutsideClick(ref, initClick)
    return <>
        <div className='element' ref={ref}>点击</div>
    </>
}
function FileText() {
    const [opts, setOpt] = useState(opt)
    const navigate = useNavigate()
    const refs = useRef(null)
    // console.log(navigate())
    // const [searchParams] = useSearchParams()
    // const ids = searchParams.get('id') || ''
    // console.log(ids)
    let { id } = useParams()
    // console.log(id)
    const initFormData = (e) => {
        console.log(e)
    }
    const [count, setCount] = useState(0)
    const [countIndex, setCountIndex] = useState(0)
    const addInit = () => {
        // setCount((e) => e + 1)
        console.log(refs)
        setTimeout(() => {
            setCountIndex(countIndex + 1)
            setCount((e) => e + 1)
        }, 3000)
    }
    const [flag, setFlag] = useState(false)
    useEffect(() => {

    }, [])
    //  <FormItemList initFormData={initFormData} opt={opts}></FormItemList>
    return (
        <>
            <div className="text">文本标签</div>
            <h1>{countIndex}countIndex</h1>
            <Button onClick={addInit}>点击加{count}</Button>
            <ItemListText ref={refs}></ItemListText>
            {flag && <h1>欢迎回来
                <ItemListText ></ItemListText>
            </h1>}
            {!flag && <h1>请登录
                <ItemList></ItemList>
            </h1>}
            <Button type='primary' onClick={() => setFlag(!flag)}>{flag ? '退出' : '登录'}</Button>
            <ClcikElement></ClcikElement>
        </>
    )
}
export default FileText
