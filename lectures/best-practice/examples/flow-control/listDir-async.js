"use strict";

var fs = require("fs"),
    pathUtil = require("path"),
    async = require("async");

function listDir(dirname, callback) {
    async.waterfall([
        async.apply(fs.readdir, dirname),
        statFiles
    ], callback);

    function statFiles(files, callback) {
        var tasks = {};

        files.forEach(function forEachFile(filename) {
            tasks[filename] = async.apply(statFile, filename);
        });

        async.parallel(tasks, callback);
    }

    function statFile(filename, callback) {
        var path = pathUtil.resolve(dirname, filename);

        async.waterfall([
            async.apply(fs.stat, path),
            function onFsStat(stat, callback) {
                if (stat.isDirectory()) {
                    listDir(path, callback);
                } else {
                    callback(null, "file");
                }
            }
        ], callback);
    }
}







// EXECUTION
listDir(pathUtil.resolve(__dirname, "../"), function (err, result) {
    if (err) {
        throw err;
    }

    console.log(result);
});