import React, { useEffect } from "react";
import { CountUp } from 'countup.js'
function CountUpItems(props) {
    const { target = 10000, index, children } = props
    const options = {
        duration: 3.2,
        once: false,
    }

    useEffect(() => {
        const childrenList = document.querySelectorAll('.myTargetElement1')
        if (childrenList.length > 0) {
            let demo = new CountUp(childrenList[index], target, options)
            if (!demo.error) {
                demo.start()
            } else {
                // demo.pauseResume()
                demo.start()
                console.error(demo.error)
            }
        }
        console.log(childrenList, '胡江苏')

    }, [document.querySelectorAll('.myTargetElement1')])
    console.log(document.querySelectorAll('.myTargetElement1'))
    return (
        <div className="myTargetElement1"></div>
    )
}
export default CountUpItems