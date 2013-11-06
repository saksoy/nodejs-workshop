var connect = require("connect"),
    fs = require("fs");

connect()
    .use(logger)
    .use(serveFile)
    .listen(1337);

function logger(req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
}

function serveFile(req, res, next) {
    var path = __dirname + req.url;

    fs.exists(path, function onPathExists(result) {
        if (!result) {
            res.statusCode = 404;
            res.end("404 - Not found");
            return;
        }

        res.statusCode = 200;
        fs.createReadStream(path).pipe(res);
    });
}

console.log("Server running at http://127.0.0.1:1337/\n");