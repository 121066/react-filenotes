import { Button } from "antd"
import { useState } from "react"
import { element, extractNumbersAndChars } from "constants"
import './index.scss'
const initHTML = (html, value) => {

    let arr = extractNumbersAndChars('总金额100，共2件2020-12-01 00:12:12',)
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
            <div className="  m-2   " id="html">
                {/* {initHTML()} */}
                {/* {initObj[0]} */}
                <div className="header"></div>
            </div>
        </>
    )
}
export default HeaderTop
