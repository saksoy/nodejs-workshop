var http = require('http');

http.createServer(function (req, res) {

    var route = req.url.substr(1),
        body = "";

    if(route === "about") {
        body = "My first node.js Webpage";
    }
    else if(route === "imprint") {
        body = "(c) 2013 - fully MIT licensed";
    }
    else {
        res.statusCode = 404;
        body = res.statusCode + " Page not found.";
    }

    res.setHeader('Content-Type', 'text/html');
    res.end(body);

}).listen(9000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:9000/');