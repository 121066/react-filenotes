import { Form,Input,Row,Col, Button } from "antd"
function FormItem(){
    const [form] = Form.useForm();
    const onFinish=(value)=>{
        console.log(value)
    }
    const addBtn=()=>{
        form.submit()
        console.log(form.getFieldValue())
        // form.isFieldValidating()
    }
    const initClick=(e,value)=>{
        console.log(e,value)
    }
    return <>
    <div>
        <Form onFinish={onFinish} form={form} validateTrigger="onBlur">
           <Row gutter={24}>
            <Col span={8}>
            <Form.Item name="userName" >
                <Input size="large" placeholder="请输入用户名称"></Input>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item name="passWord"  rules={[{ required: true, message: "请输入验证码" }]}>
                <Input size="large"  placeholder="请输入密码"></Input>
            </Form.Item>
            </Col>
            <Col>
            <Form.Item>
            <Button type="primary" onClick={addBtn}  >点击</Button>
            </Form.Item>
            </Col>
           </Row>
        </Form>
      <Button type="primary" onClick={(e)=>initClick('1',e)}>点击bind</Button>
      <Button type="primary" onClick={initClick.bind(this,1)}>点击</Button>
      <Button type="primary" onClick={initClick('2')}>直接点击</Button>
    </div>
    </>
}
export default FormItem