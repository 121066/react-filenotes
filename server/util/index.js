let fs = require('fs')
let options = {
    encoding: 'utf-8',
    flag: 'r', //读取 w 写入
}
let optionsw = {
    encoding: 'utf-8',
    flag: 'w', //读取 w 写入
}
function setFileSystem(path, value) {
    let val = JSON.stringify(value)
    fs.writeFile(path, val, optionsw, function (err) {
        console.log(err)
    })
}
module.exports = {
    setFileSystem,
}
