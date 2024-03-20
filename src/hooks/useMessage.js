import { useState } from "react";
export const useMessage = () => {
    const [message, setMessage] = useState('')
    const sendMessage = (e) => {
        setMessage(e)
    }
    return { message, sendMessage }
}
