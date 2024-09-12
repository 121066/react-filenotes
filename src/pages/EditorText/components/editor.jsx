import { Button } from 'antd'
import './index.scss'
import { useState, useRef, useEffect } from 'react'
function EditorDiv() {
    const [inputValue, setInputValue] = useState('')
    const refEditor = useRef(null)
    const onChange = (e) => {
        console.log(e.target.innerHTML)
    }
    useEffect(() => {
        const editor = document.getElementById('editor')
        if (editor) {
            editor.addEventListener('input', onChange)
            editor.addEventListener('input', onChange)
        }
    }, [document.getElementById('editor')])
    return (
        <>
            <h1>编辑器</h1>
            <div contentEditable="true" ref={refEditor} id="editor"></div>
            <Button
                onClick={() => {
                    const selection = window.getSelection()
                    const anchorNode = selection.anchorNode
                    if (anchorNode && anchorNode.parentElement.id !== 'editor')
                        return

                    const range = selection.getRangeAt(0)
                    range.deleteContents()

                    const link = document.createElement('a')
                    link.href = 'http://example.com' // 插入链接的默认URL
                    link.target = '_blank'
                    link.textContent = '点击这里访问超链接'

                    range.insertNode(link)
                    selection.collapse(link, 1)
                }}
            >
                点击
            </Button>
        </>
    )
}
export default EditorDiv
