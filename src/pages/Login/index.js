import { Card, Form, Input, Button, message } from 'antd'
import './index.scss'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/redux/module/user'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onFinish = async (value) => {
        console.log(value, 'value')
        await dispatch(fetchLogin(value))
        navigate('/goodslist')
        message.success('登录成功')
    }
    return (
        <>
            <div className="login">
                <Card className="login-container">
                    <Form validateTrigger="onBlur" onFinish={onFinish}>
                        <Form.Item
                            name="mobile"
                            rules={[
                                { required: true, message: '请输入手机号码' },
                                {
                                    pattern: /^1[3-9]\d{9}$/,
                                    message: '请输入正确的手机号码',
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="请输入手机号"
                            ></Input>
                        </Form.Item>
                        <Form.Item
                            name="code"
                            rules={[
                                { required: true, message: '请输入验证码' },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="请输入验证码"
                            ></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    )
}
export default Login
