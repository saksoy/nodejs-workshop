var http = require('http');

http.createServer(function (req, res) {

    res.setHeader('Content-Type', 'text/json');
    res.setHeader('Transfer-Encoding', 'chunked');

    var i = 0;
    var dataEmitter = setInterval(function() {

        res.write("Chunk " + i++ + "\n");

        if(i === 20) {
            res.end("20 reached");
            clearInterval(dataEmitter);
        }
    }, 2000);

}).listen(9000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:9000/');