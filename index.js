var fs = require('fs');
var http = require('http')



var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");




    if (request.method === 'GET' && request.url === '/') {

        fs.readFile('./index.html', 'utf-8', function (err, data) {
            console.log(data);

            response.write(data);
            response.end();
        }
        )
    } else {
        response.statusCode = 404;
        response.write('<img src="https://cdn.windowsreport.com/wp-content/uploads/2019/02/Ddkmd.sys-blue-screen-errors-in-Windows.jpg">');
        response.end();
    }
})

   


server.listen(9000);



