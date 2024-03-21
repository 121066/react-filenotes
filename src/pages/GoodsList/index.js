import { useEffect, useState, useRef } from 'react'
import FormItemList from '../../components/formItem'
import './index.css'
import NumericInput from 'components/NumericInput'
import { message, Card } from 'antd'
const opt = [
    {
        type: 'input',
        name: 'activityName',
        label: '活动名称',
        size: 'mini',
        span: 24,
        value: '',
        rules: [{ required: true, message: '请输入活动名称' }, { max: 40, message: '活动名称最长为40' }, {
            validator: (rule, value, callback) => {
                let str = value + ''
                let objStr = {}
                for (let i = 0; i < str.length; i++) {
                    objStr[str[i]] = true
                }
                if (Object.keys(objStr).length !== str.length) {
                    callback('活动名称有重复文案请修改')
                }
                callback()
            }
        }],
    },
    {
        type: 'slot',
        name: 'activityTime',
        label: '助力有效期',
        sizeL: 'mini',
        span: 24,
        rules: [{ required: true, message: '' }, {
            validator: (rule, value, callback) => {
                let check = value.every((item) => item !== '')
                if (!check) {
                    callback("请输入助力有效期");
                    return;
                } else {
                    callback()
                }

            }
        },],
        Slot: (props) => {
            const { onChange, value } = props
            console.log(props, value)
            {
                const [day, setDay] = useState('');
                const [hour, setHour] = useState('');
                const [minute, setMinute] = useState('');
                useEffect(() => {
                    let activityTime = [day, hour, minute]
                    onChange(activityTime)
                }, [day, hour, minute])
                return <>

                    <NumericInput style={{
                        width: 80
                    }}
                        value={day}
                        onChange={setDay}></NumericInput> <span className='ml-2 mr-2'>天</span>
                    <NumericInput size="mini" style={{
                        width: 80
                    }}
                        value={hour}
                        onChange={setHour}></NumericInput><span className='ml-2 mr-2'>时</span>
                    <NumericInput style={{
                        width: 80
                    }}
                        value={minute}
                        onChange={setMinute}></NumericInput><span className='ml-2 mr-2'>分钟</span>
                </>
            }
        }
    },
    {
        type: 'timeDate',
        name: 'activityStartDate',
        label: '活动开始时间',
        size: 'mini',
        span: 24,
        rules: [{ required: true, message: '请输入活动开始时间' }],
        format: 'YYYY-MM-DD HH:mm:ss'
    }, {
        type: 'timeDate',
        name: 'activityEndDate',
        label: "活动结束时间",
        size: 'mini',
        span: 24,
        format: 'YYYY-MM-DD HH:mm:ss',
        rules: [{ required: true, message: '请输入活动结束时间' },]
    },
    {
        type: 'radio',
        name: 'buyType',
        label: '购买方式',
        size: 'mini',
        span: 24,
        value: 2,
        options: [{ label: '任意金额可购买', value: 1 }, { label: '指定金额可购买', value: 2 }],
        rules: [{ required: true, message: '请选择购买方式' }]
    },
    {
        type: 'radio',
        name: 'assistance',
        label: '是否允许自己助力',
        size: 'mini',
        span: 24,
        value: 2,
        options: [{ label: '是', value: 1 }, { label: '否', value: 2 }],
        rules: [{ required: true, message: '请选择是否允许自己助力' }]
    },
    {
        type: 'numberInput',
        name: 'assistanceNum',
        label: '助力人数',
        size: 'mini',
        span: 24,
        rules: [{ required: true, message: '请输入助力人数' },]
    },
    {
        type: 'select',
        name: 'assistanceType',
        label: '助力类型',
        size: 'mini',
        span: 24,
        rules: [{ required: true, message: '请选择助力类型' }],
        options: [{ label: '固定金额', value: 1 }, { label: '固定比例', value: 2 }, { label: '随机立减', value: 3 }]
    }
]

function GoodsList() {
    const [messageApi, contextHolder] = message.useMessage();
    const [opts, setOpt] = useState(opt)
    const formRef = useRef(null)
    const initFormData = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'activityEndDate': fieldsValue['activityEndDate'].format('YYYY-MM-DD HH:mm:ss'),
            'activityStartDate': fieldsValue['activityStartDate'].format('YYYY-MM-DD HH:mm:ss'),
            'day': fieldsValue['activityTime'][0],// 天
            'hour': fieldsValue['activityTime'][1],// 时
            'minute': fieldsValue['activityTime'][2]
        };
        let end = new Date(values.activityEndDate).getTime()
        let start = new Date(values.activityStartDate).getTime()
        if (start > end) {
            messageApi.open({
                type: 'error',
                content: '活动开始时间需要小于活动结束时间',
            });
            return
        }
        console.log(values, '表单数据')
        // 活动开始时间需要小于活动结束时间 
    }
    const btnText = ['保存', '取消']
    return (
        <>
            {contextHolder}

            <div className='box '>
                <Card>
                    <FormItemList btnText={btnText} initFormData={initFormData} opt={opts}></FormItemList>
                </Card>
            </div>


        </>
    )
}
export default GoodsList
