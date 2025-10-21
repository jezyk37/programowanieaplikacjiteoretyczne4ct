const {error} = require('console')
const fs = require('fs')
const dirname = "./"

fs.readFile('chopietext.txt', 'utf-8', function(error,data){
    if(error){
        return console.log("error chopie")

    }
    console.log(data)
})