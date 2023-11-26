import { useState } from "react";
import { Button } from "antd";
const InitCretet = () => {
  const [count, setCount] = useState(0)
  let i = 0
  let i1 = 0
  let i2 = i1 == i
  console.log(i2)
  return (
    <>
      <div>测试{count}</div>
      <Button>增加</Button>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <InitCretet></InitCretet>
    </div>
  );
}

export default App;
