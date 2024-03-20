import { useState, useEffect } from 'react';

// 自定义通信Hooks
const useCommunication = () => {
    const [message, setMessage] = useState('');

    // 发送消息的函数
    const sendMessage = (msg) => {
        setMessage(msg);
    };

    return { message, sendMessage };
};

// 接收消息的组件
function MessageReceiver() {
    const { message } = useCommunication();
    return <div>{message}123</div>;
}

// 发送消息的组件
function MessageSender() {
    const { message, sendMessage } = useCommunication();

    useEffect(() => {
        // 模拟发送消息的动作
        sendMessage('Hello, MessageReceiver!');
    }, [sendMessage]);

    return <button>发送消息{message}</button>;
}
function Setting() {
    return (
        <>
            <div>设置模块</div>
            <MessageSender></MessageSender>
            <MessageReceiver></MessageReceiver>
        </>
    )
}
export default Setting
