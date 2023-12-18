import { Form,Input,Row,Col, Button } from "antd"
function FormItem(){
    const [form] = Form.useForm();
    const onFinish=(value)=>{
        console.log(value)
    }
    const addBtn=()=>{
        form.submit()
        console.log(form.getFieldValue())
    }
    return <>
    <div>
        <Form onFinish={onFinish} form={form}>
           <Row gutter={24}>
            <Col span={8}>
            <Form.Item name="userName" >
                <Input size="large" placeholder="请输入用户名称"></Input>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item name="passWord" >
                <Input size="large" placeholder="请输入密码"></Input>
            </Form.Item>
            </Col>
           </Row>
        </Form>
        <Button type="primary" onClick={addBtn}>点击</Button>
    </div>
    </>
}
export default FormItem