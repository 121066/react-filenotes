import { Form,Input,Row,Col, Button, Select ,DatePicker} from "antd"
import TableList from "./components/table";
import {useState}from 'react'
import './index.scss'
function FormItem(){
    const [form] = Form.useForm();
    const { Option } = Select;
    const [count,setCount]=useState(0)
    const {RangePicker}=DatePicker
    const onFinish=(value)=>{
        console.log(value)
    }
    const addBtn=()=>{
        form.submit()
        console.log(form.getFieldValue())
        // form.isFieldValidating()
    }
    const initClick=(e,value)=>{
        // console.log(e,value)
        setCount(item=>item+1)
        setCount(item=>item+1)
        setCount(item=>item+1)
        console.log(count)
    }
    return <>
    <div className="m-4">
        <Form onFinish={onFinish} form={form} validateTrigger="onBlur">
           <Row gutter={24}>
            <Col span={6}>
            <Form.Item name="taskName" label="任务名称" >
                <Input size="mini" placeholder="请输入任务名称"></Input>
            </Form.Item>
            </Col>
            <Col span={6}>
            <Form.Item name="taskType" label="项目类型"  rules={[{ required: true, message: "请输入验证码" }]}>
                <Input size="mini"  placeholder="请输入项目类型"></Input>
            </Form.Item>
            </Col>
           
            <Col span={6}>
                <Form.Item name="taskStatus" label="项目状态">
                    <Select>
                        <Option value="0">开始</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={6}>
                <Form.Item name="taskTime" label="任务时间">
                    <RangePicker ></RangePicker>
                </Form.Item>
            </Col>
            <Col span={6}>
            <Form.Item name="taskPrint" label="项目责任人">
                <Input></Input>
            </Form.Item>
            </Col>
            <Col span={6}>
                <Form.Item name="taskIsFlag" label="项目所属">
                    <Input></Input>
                </Form.Item>
            </Col>
            <Col>
            <Form.Item>
            <Button type="primary" onClick={addBtn}  >搜索</Button>
            </Form.Item>
            </Col>
           </Row>
        </Form>
        <div className="mt-3 mb-3">
            <TableList></TableList>
        </div>
      <Button type="primary" onClick={(e)=>initClick('1',e)}>点击bind</Button>
      <Button type="primary" onClick={initClick.bind(this,1)}>点击</Button>
      {/* <Button type="primary" onClick={initClick('2')}>直接点击</Button> */}
    </div>
    </>
}
export default FormItem