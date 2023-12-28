import { Form, Input, Row, Col, Button, Select, DatePicker } from 'antd'
function FormItemList() {
    const [form] = Form.useForm()
    const { Option } = Select
    const { RangePicker } = DatePicker
    const { TextArea } = Input
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
    ]
    const onFinish = (e) => {
        console.log(e)
    }
    return (
        <>
            <Form form={form} onFinish={onFinish} validateTrigger="onBlur">
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
                                        rules={item.rules || []}
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
                                        rules={item.rules || []}
                                    >
                                        <RangePicker></RangePicker>
                                    </Form.Item>
                                </Col>
                            )
                        } else if (item.type === 'textArea') {
                            return (
                                <Col span={item.span} key={index}>
                                    <Form.Item
                                        name={item.name || 'textArea'}
                                        label={item.label || '文本域'}
                                        rules={item.rules || []}
                                    >
                                        <TextArea rows={item.rows} />
                                    </Form.Item>
                                </Col>
                            )
                        }
                    })}
                    <Col span={6}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                        <Button type="primary">重置</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default FormItemList
