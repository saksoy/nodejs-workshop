var connect = require("connect"),
    fs = require("fs");

function logger(req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
}

function fileServer(root) {
    return function fileServer(req, res, next) {
        var path = root + req.url;

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
}

connect()
    .use(logger)
    .use(fileServer(__dirname))
    .listen(1337);

console.log("Server running at http://127.0.0.1:1337/\n");