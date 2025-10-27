const http = require('http')
const port = 8080

//zainicjowanie serwera www nasłuchujacego na porcie 8080
http.createServer(function(request, response){
    response.writeHead(200,{'content-type': 'text/html'})
    //wyswiatlona strona
    response.write(`
        <h1> Cześć to jest moje node http chopie</h1>
        <h2 style='color:red'>A to kolor czerwony</h2>`);
        response.end()
}).listen(port)