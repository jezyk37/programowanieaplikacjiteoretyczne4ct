//import frameworka express
const express = require('express');

//wywolanie frameworka
const app = express();
const port = 8080;

//obsluga zadania GET strony głównej 
app.get('/', (req,res)=>{
    res.send('<h1>Czesc tutaj express JS</h1>');
})
app.listen(port, ()=>{
    console.log(`serwer nasluchuje pod adresem: http://localhost:${port}`);
})