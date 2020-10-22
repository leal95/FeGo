// Include http module.
var http = require('http');

// Create http server.
var httpServer = http.createServer(function (req, resp) {

    resp.writeHead(200, {'Access-Control-Allow-Origin':'*','Content-Type': 'text/plain'});
    resp.write("Welcome to Local Server!");
    resp.end();
});

// Start http server listen on port 8888.
httpServer.listen(8888);

console.log("Use browser to get url 'http://localhost:8888/http_server.js'");