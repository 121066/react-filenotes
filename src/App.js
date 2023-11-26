import { useEffect, useState } from 'react'
import { Button } from 'antd'
const InitCretet = () => {
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
    }
    const reduce = () => {
        setCount(count - 1)
    }
    useEffect(() => {
        fetch('http://localhost:3080/file', {
            method: 'post',
            body: JSON.stringify({ name: '奥铃', age: 28 }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res, '输')
            })
    }, [])

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
