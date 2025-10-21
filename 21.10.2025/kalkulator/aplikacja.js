const kalkulator = require('./kalkulator')

const a = 3
const b = 6

const wynikx = kalkulator.metoda_x(a , b)
const wyniky = kalkulator.metoda_y(a,b)
console.log(`dla a = ${a} i b = ${b}`)
console.log(`y = ${wyniky}`)
console.log(`x = ${wynikx}`)