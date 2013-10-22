var fs = require("fs");

var file = "../fs/files/names.json";

var namesReadableStream = fs.createReadStream(file, { encoding : "utf-8" });

namesReadableStream.on("readable", function () {

    //process.stdout = writeable stream
    process.stdout.write(namesReadableStream.read(100));
    namesReadableStream.pause();

    setTimeout(function () {
        namesReadableStream.resume();
    }, 200);
});

namesReadableStream.on("end", function () {
    console.log("end");
});

namesReadableStream.on("error", function (e) {
    throw e;
});