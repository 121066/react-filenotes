import { Form, Input, Row, Col, Button, Select, DatePicker, Radio, TimePicker } from 'antd'
import NumericInput from './NumericInput'
import { forwardRef, useImperativeHandle, useRef } from 'react'
function FormItemList(props, ref) {
    const { initFormData, btnText } = props
    // const refItem = useRef(null)
    const [form] = Form.useForm()
    const { Option } = Select
    const { RangePicker } = DatePicker
    const { TextArea } = Input
    const opt = props.opt || []
    useImperativeHandle(ref, () => ({
        submit: () => { }
    }))
    const onFinish = (e) => {
        initFormData(e)
    }
    const reset = () => {
        form.resetFields()
        // initFormData({
        //     assistanceType: '', assistanceNum: '',
        //     assistance: 2, buyType: 2, activityEndDate: '',
        //     activityStartDate: '', activityTime: [], activityName: ''
        // })
    }
    const onChange = (e) => {
        console.log(e, '数据')
    }
    const InputElement = ({ item, index }) => {
        return (
            <Col span={item.span} key={index}>
                <Form.Item
                    name={item.name}
                    label={item.label}
                    rules={item.rules}
                >
                    <Input
                        size="mini"
                        placeholder={'请输入' + item.label}
                    ></Input>
                </Form.Item>
            </Col>
        )
    }
    const SelectElement = ({ item, index }) => {
        return (
            <Col span={item.span} key={index}>
                <Form.Item
                    name={item.name || 'select'}
                    label={item.label || '选择器'}
                    rules={item.rules}
                >
                    <Select options={(item.options.map((Item, count) => ({
                        value: Item.value,
                        label: Item.label
                    })))}>
                        {/* {item.options.map((Item, count) => {
                        return (
                            <>
                                <Option Option
                                    value={Item.value}
                                    key={count}
                                >
                                    {Item.label}
                                </Option>
                            </>
                        )
                    })} */}
                    </Select>
                </Form.Item>
            </Col>
        )
    }
    const DateElement = ({ item, index }) => {
        return (
            <Col span={item.span} key={index}>
                <Form.Item
                    name={item.name || 'date'}
                    label={item.label || '日期选择'}
                    rules={item.rules}
                >
                    <RangePicker showTime format={item.format || 'YYYY-MM-DD'}></RangePicker>
                </Form.Item>
            </Col>
        )
    }
    const DateTimeElement = ({ item, index }) => {
        return (
            <Col span={item.span} key={index}>
                <Form.Item
                    name={item.name || 'date'}
                    label={item.label || '日期选择'}
                    rules={item.rules}
                >
                    <DatePicker showTime format={item.format || 'YYYY-MM-DD'}></DatePicker>
                </Form.Item>
            </Col>
        )
    }
    const RadioElement = ({ item, index }) => {
        return (
            <Col span={item.span} key={index}>
                <Form.Item
                    name={item.name || 'radio'}
                    label={item.label || '单选框'}
                    rules={item.rules}
                >
                    <Radio.Group >
                        {item.options.map((Item, i) => {
                            return (
                                <span key={i}>
                                    <Radio value={Item.value} > {Item.label}</Radio>
                                </span>
                            )
                        })}
                    </Radio.Group>
                </Form.Item>
            </Col>
        )
    }
    const SlotElement = ({ item, index }) => {
        return (
            <Col span={item.span} key={index}>
                <Form.Item name={item.name || 'slot'}
                    label={item.label}
                    rules={item.rules}
                >
                    <item.Slot></item.Slot>

                </Form.Item>
            </Col>
        )
    }
    const NumberInputElement = (({ item, index }) => {
        return (
            <Col span={item.span} key={index}>
                <Form.Item name={item.name || 'numberInput'}
                    label={item.label}
                    rules={item.rules || []}
                >
                    <NumericInput></NumericInput>

                </Form.Item>
            </Col>
        )
    })
    const TextAreaElement = ({ item, index }) => {
        return (
            <Col span={item.span} key={index}>
                <Form.Item
                    name={item.name || 'textArea'}
                    label={item.label || '文本域'}
                    rules={item.rules}
                >
                    <TextArea rows={item.rows} />
                </Form.Item>
            </Col>
        )
    }
    const elementObj = {
        input: InputElement,
        select: SelectElement,
        date: DateElement,
        timeDate: DateTimeElement,
        radio: RadioElement,
        slot: SlotElement,
        numberInput: NumberInputElement,
        textArea: TextAreaElement
    }
    return (
        <>
            <Form form={form} onFinish={onFinish} validateTrigger="onBlur" fields={opt}

            >
                <Row gutter={24}>
                    {opt.map((item, index) => {
                        return elementObj[item.type]({ item, index }) || <span>...</span>
                    })}
                    <Col span={12}>
                        <Button
                            className="mr-4"
                            type="primary"
                            htmlType="submit"
                        >
                            {btnText[0] || '确认'}
                        </Button>

                        <Button onClick={reset}>{btnText[1] || '重置'}</Button>
                    </Col>
                </Row >
            </Form >
        </>
    )
}
export default forwardRef(FormItemList)

