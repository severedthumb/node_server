const http = require('http')

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello, severedthumb!');
}).listen(3000, '192.168.1.15');

console.log('Server listening at 192.168.1.15:3000');