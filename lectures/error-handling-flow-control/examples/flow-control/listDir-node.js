"use strict";

var fs = require("fs"),
    pathUtil = require("path");

// WELCOME TO THE CALLBACK HELL
function listDir(dirname, callback) {
    var result = {},
        pending = 0;

    fs.readdir(dirname, function onDirRead(err, files) {
        if (err) {
            callback(err);
            return;
        }

        pending = files.length;

        files.forEach(function forEachFile(filename) {
            var path = pathUtil.join(dirname, filename);

            fs.stat(path, function onStat(err, stat) {
                if (err) {
                    callback(err);
                    return;
                }

                if (stat.isDirectory()) {
                    listDir(path, function onListDirFinished(err, dir) {
                        if (err) {
                            callback(err);
                            return;
                        }

                        done(filename, dir);
                    });
                } else {
                    done(filename, "file");
                }
            });
        });
    });

    function done(filename, fileOrDir) {
        pending--;
        result[filename] = fileOrDir;
        if (pending === 0) {
            callback(null, result);
        }
    }
}







// EXECUTION
listDir(pathUtil.resolve(__dirname, "../"), function (err, result) {
    if (err) {
        throw err;
    }

    console.log(result);
});