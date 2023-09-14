const os = require('os')

const user  = os.userInfo()


console.log(user)

console.log(`uptime of system ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    free: os.freemem()


}

console.log(currentOs)