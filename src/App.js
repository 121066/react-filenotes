import { useState } from "react";
import { Button } from "antd";
const InitCretet = () => {
  const [count, setCount] = useState(0)
  let i = 0
  let i1 = 0
  if (i == i1) {
       console.log( '你话')
  }
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
