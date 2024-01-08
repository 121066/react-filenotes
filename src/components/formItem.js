import { Form, Input, Row, Col, Button, Select, DatePicker, Radio, TimePicker } from 'antd'
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
        initFormData({})
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
                        if (item.type === 'input') {
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
                        } else if (item.type === 'select') {
                            return (
                                <Col span={item.span} key={index}>
                                    <Form.Item
                                        name={item.name || 'select'}
                                        label={item.label || '选择器'}
                                        rules={item.rules}
                                    >
                                        <Select>
                                            {item.options.map((Item, count) => {
                                                return (
                                                    <>
                                                        <Option
                                                            value={Item.value}
                                                        >
                                                            {Item.label}
                                                        </Option>
                                                    </>
                                                )
                                            })}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            )
                        } else if (item.type === 'date') {
                            // 日期组件
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
                        } else if (item.type === 'timeDate') {
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
                        } else if (item.type === 'textArea') {
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
                        } else if (item.type === 'radio') {
                            // 单选框
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
                        } else if (item.type === 'slot') {
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
                    })}
                    <Col span={6}>
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
