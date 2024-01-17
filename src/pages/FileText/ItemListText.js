import { forwardRef, useState, useEffect, useImperativeHandle } from 'react'
const ItemListsText = (props, ref) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('测试useEffect2', count)
        return () => {
            console.log('销毁测试useEffect2')
        }
    })
    const init = () => {
        console.log('迪阿尼')
    }
    useImperativeHandle(ref, () => {
        return ({
            click: init,
        })
    })
    return <div ref={ref}>
        <div>测试useEffect2</div>
        <span>span元素</span>
    </div>
}
export default forwardRef(ItemListsText)