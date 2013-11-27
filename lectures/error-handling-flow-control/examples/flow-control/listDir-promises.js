"use strict";

var fs = require("fs"),
    pathUtil = require("path"),
    when = require("when"),
    nodefn = require("when/node/function");

var readdir = nodefn.lift(fs.readdir),
    stat = nodefn.lift(fs.stat);

function listDir(dirname, callback) {
    var files;

    nodefn.liftCallback(callback)(
        readdir(dirname)
        .then(function (filesInDir) {
            files = filesInDir;

            return when.map(filesInDir, function (file) {
                return stat(pathUtil.join(dirname, file));
            });
        })
        .then(function (stats) {
            var i = 0;

            return when.map(files, function (file) {
                return stats[i++].isDirectory()?
                    nodefn.call(listDir, pathUtil.join(dirname, file)):
                    "file";
            })
        })
        .then(function (contents) {
            var result = {};

            files.forEach(function (file, i) {
                result[file] = contents[i];
            });

            return result;
        })
    );
}







// EXECUTION
listDir(pathUtil.resolve(__dirname, "../"), function (err, result) {
    if (err) {
        throw err;
    }

    console.log(result);
});