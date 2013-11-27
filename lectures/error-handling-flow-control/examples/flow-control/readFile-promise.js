var Q = require("q"),
    fs = require("fs");

function readFile(file, options) {
    var deferred = Q.defer();

    fs.readFile(file, options, function onFileRead(err, data) {
        if (err) {
            deferred.reject(err);
            return;
        }

        deferred.resolve(data);
    });

    return deferred.promise;
}

readFile(__dirname + "/readDir-promise.js", { encoding: "utf8" }).then(function (data) {
    console.log(data);
});