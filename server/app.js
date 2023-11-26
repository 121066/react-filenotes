var http = require('express')
var body = require('body-parser')
var app = http()
var cors = require('cors')
app.use(body.urlencoded({ extended: false }))
app.use(body.json())
app.use(cors())
let port = 3080
app.get('/test', function (req, res) {
    res.send('你还')
})
app.post('/file', function (req, res) {
    console.log(req.body)
    res.json({
        data: 1,
    })
})
app.listen(port, function (e) {
    console.log(e, '服务启动了')
})
