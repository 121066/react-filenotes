const crypto = require('crypto')
const { program } = require('commander')
program.option('-p, --password [value]', 'generate user password').parse(process.argv)

function md5(data) {
    let hash = crypto.createHash('md5').update(data).digest('hex')
    return hash
}
function generateUserPassword() {
    const dbPassword = md5(md5(md5(md5('123abcd'))) + '用户名')
    console.log(dbPassword)
}
generateUserPassword()