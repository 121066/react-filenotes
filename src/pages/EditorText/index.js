import { Button } from "antd"
import { useMessage } from "hooks/useMessage"
const InitText = () => {
    const { message } = useMessage()
    console.log(message)
    return (
        <div>
            <h3>我是接受的消息</h3>
            {message}
        </div>
    )
}
function EditorText() {
    const { sendMessage } = useMessage()
    const sendMsg = () => {
        sendMessage('我是文本编辑器发送的消息')
    }
    return (
        <>
            <div>文本编辑</div>
            <Button type="primary" onClick={sendMsg}>点击发送消息</Button>
            <InitText></InitText>
        </>
    )
}
export default EditorText
