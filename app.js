const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {

	if (request.url == '/styles.css') {
		response.writeHead(200, {'Content-Type': 'text/css'});
		const content = fs.readFileSync('./styles.css');
		response.write(content);
		response.end();
	} else if (request.url == '/script.js') {
		response.writeHead(200, {'Content-Type': 'text/javascript'});
		const content = fs.readFileSync('./script.js');
		response.write(content);
		response.end();
	} else {
		response.writeHead(200, {'Content-Type': 'text/html'});
		const content = fs.readFileSync('./index.html');
		response.write(content);
		response.end();
	};
}).listen(3000);

console.log('Server listening at 192.168.1.15:3000');