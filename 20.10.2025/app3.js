const {error} = require('console')
const fs = require('fs')
const dirname = "./"

fs.readdir(dirname, (error,files)=>{
    if(error){
        console.log(error)
    }else{
        console.log("\n Zawartość bieżącego katalogu")
        files.forEach(file=>{
            console.log(file)
        })
    }
})