import { Form, Input, Row, Col, Button, Select, DatePicker, Radio, TimePicker } from 'antd'
import NumericInput from './NumericInput'
function FormItemList(props) {
    const { initFormData, btnText } = props

    const [form] = Form.useForm()
    const { Option } = Select
    const { RangePicker } = DatePicker
    const { TextArea } = Input
    const opt = props.opt || []
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

    return (
        <>
            <Form form={form} onFinish={onFinish} validateTrigger="onBlur" fields={opt}

            >
                <Row gutter={24}>
                    {opt.map((item, index) => {
                        return < >
                            {
                                item.type === 'input' && (
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
                            {
                                item.type === 'select' && (
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
                            {
                                item.type === 'data' && (
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
                            {
                                item.type === 'timeDate' && (
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
                            {
                                item.type === 'textArea' && (
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
                            {
                                item.type === 'radio' && (
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
                            {
                                item.type === 'slot' && (
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
                            {
                                item.type === 'numberInput' && (
                                    <Col span={item.span} key={index}>
                                        <Form.Item name={item.name || 'numberInput'}
                                            label={item.label}
                                            rules={item.rules || []}
                                        >
                                            <NumericInput></NumericInput>

                                        </Form.Item>
                                    </Col>
                                )
                            }
                        </>
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
export default FormItemList
