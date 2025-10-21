const url = require('url')

const adres = 'https://pzs1.pszczyna.edu.pl/category/zastepstwa/'

const addr= url.parse(adres,true);

console.log(`
    host: ${addr.host}
    href: ${addr.href}
    hostname: ${addr.hostname}
    path: ${addr.path}
    protocol: ${addr.protocol}
    
    `)