var connect = require("connect");

connect()
    .use(advancedLogger)
    .listen(1337);

console.log("Server running at http://127.0.0.1:1337/\n");

function advancedLogger(req, res, next) {
    var now = new Date().getTime(),
        end = res.end;

    console.log("%s %s", req.method, req.url);
    res.end = function () {
        console.log(
            "%s %s finished with %s in %sms",
            req.method,
            req.url,
            res.statusCode,
            new Date().getTime() - now
        );
        end.apply(res, arguments);
    };
    next();
}