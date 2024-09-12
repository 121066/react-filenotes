import React, { useEffect, useState } from 'react'
import NumberLoadingAnimation from 'components/NumberLoadingAnimation'
// import CountUp from 'react-countup'
import { CountUp } from 'countup.js'
import { Button } from 'antd'
import CountUpItems from './CountUp'
const options = {
    duration: 3.2,
}
function Customize() {
    const [count, setCount] = useState(0)
    const options = {
        duration: 3.2,
        once: false,
    }
    // let demo = new CountUp('myTargetElement', 232232256, options)
    // if (!demo.error) {
    //     demo.start()
    // } else {
    //     // demo.pauseResume()
    //     demo.start()
    //     console.error(demo.error)
    // }
    new CountUp('myTargetElement', 232232256, options)
    return (
        <>
            <Button type="primary" onClick={() => setCount(count + 1)}>
                {count}
            </Button>
            <NumberLoadingAnimation
                startNumber={0}
                endNumber={1000}
                duration={4000}
            ></NumberLoadingAnimation>
            <div className="myTargetElement" id="myTargetElement"></div>
            {[1000, 2000, 3000].map((item, index) => {
                return (
                    <CountUpItems
                        target={item}
                        index={index}
                        key={index}
                    ></CountUpItems>
                )
            })}
            {/* <CountUp
                start={-875.039}
                end={160527.012}
                duration={2.75}
                separator=" "
                decimals={4}
                decimal=","
                prefix="EUR "
                suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp> */}
        </>
    )
}
export default Customize
