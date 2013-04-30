var connect = require("connect");

connect()
    .use(logger)
    .use("/assets", fileServer(__dirname + "/assets"))
    .use(doSomething) // wird nicht ausgeführt
    .use(errorHandler)
    .listen(1337);
console.log("Server running at http://127.0.0.1:1337/\n");