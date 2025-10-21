const {error} = require('console')
const fs = require('fs')

let data = "Arek chce sie napic wojanka"

fs.writeFile('chopietext.txt', data, (error)=>{
    if(error){
        return console.log("error chopie")

    }
    console.log(fs.readFileSync('chopietext.txt', 'utf-8'))
})