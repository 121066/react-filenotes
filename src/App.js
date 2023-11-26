import { useState } from 'react'
import { Button } from 'antd'
const InitCretet = () => {
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
    }
    const reduce = () => {
        setCount(count - 1)
    }
    let i = 0
    let i1 = 0
    if (i == i1) {
        console.log('你话')
    }
    return (
        <>
            <div>测试{count}</div>
            <Button type="primary" onClick={add}>
                增加
            </Button>
            <Button type="primary" onClick={reduce}>
                减少
            </Button>
        </>
    )
}
function App() {
    return (
        <div className="App">
            <InitCretet></InitCretet>
        </div>
    )
}

export default App
