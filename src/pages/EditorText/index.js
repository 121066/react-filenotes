import { Button } from "antd"
import { useMessage } from "hooks/useMessage"
import TableForm from "./TableForm"
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
function UncontrolledForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { firstName, email, address } = Object.fromEntries(formData);
        console.log(Object.fromEntries(formData), firstName, email, address)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input type="text" name="firstName" />

            <label>Last Name:</label>
            <input type="text" name="lastName" />

            <label>Email:</label>
            <input type="email" name="email" />

            <label>Address:</label>
            <input type="text" name="address" />
            {/* ... 可能会有更多的字段 */}
            <button type="submit">Submit</button>
        </form>
    );
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
            <UncontrolledForm></UncontrolledForm>
            <TableForm></TableForm>
        </>
    )
}
export default EditorText
