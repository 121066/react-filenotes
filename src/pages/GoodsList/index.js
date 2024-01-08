import { useEffect, useState } from 'react'
import FormItemList from '../../components/formItem'
import './index.css'
import NumericInput from 'components/NumericInput'
import { Input } from 'postcss'
const opt = [
    {
        type: 'input',
        name: 'activityName',
        label: '活动名称',
        size: 'mini',
        span: 24,
        value: '',
        rules: [{ required: true, message: '请输入活动名称' }, { max: 40, message: '活动名称最长为40' }],
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
                }
                callback()
            }
        },],
        Slot: (props) => {
            const { onChange, value } = props
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
                        onChange={setMinute}></NumericInput><span className='ml-2 mr-2'>分</span>
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
        rules: [{ required: true, message: '请输入活动结束时间' }, {
            validator: (rule, value, callback) => {
                console.log(value.day, value.month, value.year)
                callback()
            }
        }]
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
        type: 'input',
        name: 'assistanceNum',
        label: '助力人数',
        size: 'mini',
        span: 24,
        rules: [{ required: true, message: '请输入助力人数' },]
    }
]

function GoodsList() {
    const [opts, setOpt] = useState(opt)
    const initFormData = (e) => {
        console.log(e)
    }
    const btnText = ['保存', '取消']
    return (
        <>
            <div className='box'>
                <FormItemList btnText={btnText} initFormData={initFormData} opt={opts}></FormItemList>
            </div>
        </>
    )
}
export default GoodsList
