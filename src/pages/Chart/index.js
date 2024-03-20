import { useMessage } from "hooks/useMessage"
function Chart() {
    const { message } = useMessage()
    console.log(message, '没有变化吗')
    return (
        <>
            <div>图表区域</div>
            <div>{message}</div>
        </>
    )
}
export default Chart
