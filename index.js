var fs = require('fs');
var http = require('http')



var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    fs.readFile('./index.html.txt', 'utf-8',function(err, data) {
        console.log(data);
    })

    if (request.method === 'GET' && request.url === '/') {
        response.write(data);
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

server.listen(9000);



