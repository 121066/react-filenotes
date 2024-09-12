import React, { useState, useEffect } from 'react'

const NumberLoadingAnimation = ({ startNumber, endNumber, duration }) => {
    const [currentNumber, setCurrentNumber] = useState(startNumber)

    useEffect(() => {
        let startTime = null
        const difference = endNumber - startNumber
        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const easedProgress = easeInOutCubic(progress)
            let newNumber
            if (
                typeof startNumber === 'number' &&
                typeof endNumber === 'number'
            ) {
                newNumber = startNumber + difference * easedProgress
            } else {
                // 处理非数字情况，直接赋值结束值
                newNumber = endNumber
            }
            let numberWithSeparators
            if (typeof newNumber === 'number') {
                numberWithSeparators = newNumber.toLocaleString()
            } else {
                // 处理非数字情况，直接赋值原数据
                numberWithSeparators = newNumber
            }
            setCurrentNumber(numberWithSeparators)
            if (progress < 1) {
                requestAnimationFrame(step)
            }
        }
        requestAnimationFrame(step)
    }, [startNumber, endNumber, duration])

    return <div>{currentNumber}</div>
}

export default NumberLoadingAnimation
