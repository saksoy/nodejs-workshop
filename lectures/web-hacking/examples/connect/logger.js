var connect = require("connect");

function logger(req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
}

connect()
    .use(logger)
    .listen(1337);

console.log("Server running at http://127.0.0.1:1337/\n");