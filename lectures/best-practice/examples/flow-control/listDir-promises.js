"use strict";

var fs = require("fs"),
    pathUtil = require("path"),
    Q = require("q");

function listDir(dirname, callback) {
    var paths = [],
        files;

    Q.nfcall(fs.readdir, dirname)
        .then(function (filesInDir) {
            var statPromises,
                path;

            files = filesInDir;

            statPromises = filesInDir.map(function (filename) {
                path = pathUtil.join(dirname, filename);
                paths.push(path);

                return Q.nfcall(fs.stat, path);
            });

            return Q.all(statPromises);
        })
        .then(function (stats) {
            var resultPromises,
                path;

            resultPromises = stats.map(function (stat, index) {
                path = paths[index];

                if (stat.isDirectory()) {
                    return Q.nfcall(listDir, path);
                } else {
                    return "file";
                }
            });

            return Q.all(resultPromises);
        })
        .then(function (partialResults) {
            var results = {};

            partialResults.forEach(function (result, index) {
                results[files[index]] = result;
            });

            callback(null, results);
        });
}








// EXECUTION
listDir(pathUtil.resolve(__dirname, "../"), function (err, result) {
    if (err) {
        throw err;
    }

    console.log(result);
});