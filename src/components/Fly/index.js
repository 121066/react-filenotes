import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { errorImg } from '@/utils/img'

import './index.scss'

const defaults = {
    autoPlay: true,
    vertex_Rtop: 20, // 默认顶点高度top值
    speed: 1.2,
    start: {}, // top, left, width, height
    end: {},
    src: '',
    onEnd: () => { }
}

class Fly extends Component {
    // 基本使用方式
    static init = params => {
        let container = document.createElement('div')
        container.className = 'fly-img-box'
        document.body.appendChild(container)

        function destroy() {
            ReactDOM.createRoot(container).unmount()
            // ReactDOM.createRoot(container)
            document.body.removeChild(container)
            container = null
        }
        // 参数初始化
        params = this.setOptions(params)
        // ReactDOM.createRoot(document.querySelector('#root')).render(
        //     <React.StrictMode>
        //         <App />
        //     </React.StrictMode>,
        // );
        ReactDOM.createRoot(
            container

        ).render(
            <Fly settings={params} container={container} destroy={destroy} />,

        )

    }

    /**
     * 设置组件参数
     */
    static setOptions(options) {
        const settings = { ...defaults, ...options }
        const { start } = settings
        const { end } = settings

        // 运动轨迹最高点top值
        let vertex_top = Math.min(start.top, end.top) - Math.abs(start.left - end.left) / 3
        if (vertex_top < settings.vertex_Rtop) {
            // 可能出现起点或者终点就是运动曲线顶点的情况
            vertex_top = Math.min(settings.vertex_Rtop, Math.min(start.top, end.top))
        }

        /**
         * ======================================================
         * 运动轨迹在页面中的top值可以抽象成函数 y = a * x*x + b;
         * a = curvature
         * b = vertex_top
         * ======================================================
         */

        const distance = Math.sqrt(Math.pow(start.top - end.top, 2) + Math.pow(start.left - end.left, 2))
        // 元素移动次数
        const steps = Math.ceil(Math.min(Math.max(Math.log(distance) / 0.05 - 75, 30), 100) / settings.speed)
        const ratio = start.top === vertex_top ? 0 : -Math.sqrt((end.top - vertex_top) / (start.top - vertex_top))
        const vertex_left = (ratio * start.left - end.left) / (ratio - 1)
        // 特殊情况，出现顶点left==终点left，将曲率设置为0，做直线运动。
        const curvature = end.left === vertex_left ? 0 : (end.top - vertex_top) / Math.pow(end.left - vertex_left, 2)

        return {
            ...settings, count: -1, // 每次重置为-1
            steps,
            vertex_left,
            vertex_top,
            curvature
        }
    }

    componentDidMount() {
        this.move()
    }

    imgError = (e) => {
        e.target.onerror = null
        // e.target.src = errorImg
    }

    /**
     * 按step运动
     */
    move() {
        const { settings, container, destroy } = this.props
        const { start } = settings
        const { count } = settings
        const { steps } = settings
        const { end } = settings
        // 计算left top值
        const left = start.left + (end.left - start.left) * count / steps
        const top = settings.curvature === 0 ? start.top + (end.top - start.top) * count / steps : settings.curvature * Math.pow(left - settings.vertex_left, 2) + settings.vertex_top
        // 运动过程中有改变大小
        if (end.width != null && end.height != null) {
            const i = steps / 2
            const width = end.width - (end.width - start.width) * Math.cos(count < i ? 0 : (count - i) / (steps - i) * Math.PI / 2)
            const height = end.height - (end.height - start.height) * Math.cos(count < i ? 0 : (count - i) / (steps - i) * Math.PI / 2)
            container.style.cssText = `width: ${width}px; height: ${height}px; font-size: ${Math.min(width, height)}px`
        }
        container.style.cssText = `left: ${left}px; top: ${top}px`
        settings.count++
        // 定时任务
        const time = window.requestAnimationFrame(this.move.bind(this))
        if (count === steps) {
            window.cancelAnimationFrame(time)
            // fire callback
            destroy && destroy()
            settings.onEnd.apply(this)
        }
    }

    render() {
        const { settings } = this.props
        return (
            <>
                <img src={settings.src} onError={(e) => { this.imgError(e) }} />
            </>
        )
    }
}

export default Fly
