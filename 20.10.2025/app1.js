const os = require('os');

console.log(`
    version: ${os.version()}
    type: ${os.type()}
    uptime: ${os.uptime()}
    platform: ${os.platform()}
    release: ${os.release()}
    hostname: ${os.hostname()}
    totalmem: ${os.totalmem()}
    
    
    `)