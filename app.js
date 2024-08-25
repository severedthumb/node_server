const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer(function (request, response) {

	if (request.method == 'GET') {
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
	} else if (request.method == 'POST') {
		request.on('data', (body) => {
			let query = querystring.parse(body.toString());
			
			let content = fs.readFileSync('./greeting.html').toString();
			for (let key in query) {
				content = content.replace('{{' + key + '}}', query[key]);
			};

			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(content);
			response.end();
		})
	};
}).listen(3000);

console.log('Server is listening!');