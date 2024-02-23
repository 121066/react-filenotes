import { Button } from "antd"
import { useState } from "react"
import { element, extractNumbersAndChars } from "constants"
const initHTML = (html, value) => {
    console.log(html, value)
    let arr = extractNumbersAndChars('总金额100，共2件')
    return arr.map((item, index) => {
        return <span className={(!isNaN(item)) ? 'bg-red-700' : ''} key={index}>{item}</span>
    })


}
function HeaderTop() {
    const i = 0
    const initObj = {
        0: `<span className=" bg-red-700">${i}</span>`
    }
    const [count, setCount] = useState(0)
    const getInit = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div className="  m-2  font-bold text-3xl" id="html">
                {initHTML(element, '我已经<div className=" bg-red-700">添加了</div>')}
                {/* {initObj[0]} */}
                <Button onClick={getInit}>点击{count}</Button>
            </div>
        </>
    )
}
export default HeaderTop
