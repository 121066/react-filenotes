let fs = require('fs')
const path = require('path')
let options = {
    encoding: 'utf-8',
    flag: 'r', //读取 w 写入
}
let optionsw = {
    encoding: 'utf-8',
    flag: 'w', //读取 w 写入
}
/**
 * @param {path value} 路径 文件内容
 * 创建文件
 */
function setFileSystem(path, value) {
    let val = JSON.stringify(value)
    fs.writeFile(path, val, optionsw, function (err) {
        console.log(err)
    })
}
/**
 * 读取文件
 */
function getFileSystem(path, value) {
    const file = fs.readFile(path, options)
    if (!file) return '失败'
    return JSON.parse(file.toString())
}
/**
 * 文件流读取
 */
function getWriteStream(path) {
    let rs = fs.createReadStream(path)
    rs.on('data', (data) => {})
    rs.on('close', (res) => {})
    return rs.pipe(res)
}
module.exports = {
    setFileSystem,
    getFileSystem,
    getWriteStream,
}
