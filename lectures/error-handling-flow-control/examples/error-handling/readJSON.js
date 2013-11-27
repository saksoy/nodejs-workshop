var fs = require("fs");

function readJSON1(path, callback) {

    fs.readFile(path, { encoding : "utf-8"}, function(err, jsonString) {
        callback(JSON.parse(jsonString));
    });
}

function readJSON2(path, callback) {

    fs.readFile(path, { encoding : "utf-8"}, function(err, jsonString) {

        //Error Delegation
        if(err) {
            callback(err);
            return; //never forget return!
        }

        callback(JSON.parse(jsonString));
    });
}

function readJSON3(path, callback) {

    fs.readFile(path, { encoding : "utf-8"}, function(err, jsonString) {

        //Error Delegation
        if(err) {
            callback(err);
            return; //never forget return!
        }

        try {
            //JSON.parse might throw an error
            callback(JSON.parse(jsonString));
        }
        catch(err) {
            callback(err);
        }
    });
}

function readJSON4(path, callback) {

    fs.readFile(path, { encoding : "utf-8"}, function(err, jsonString) {

        //Error Delegation
        if(err) {
            callback(err);
            return; //never forget return!
        }

        try {
            //JSON.parse might throw an error
            callback(null, JSON.parse(jsonString));
        }
        catch(err) {
            callback(err);
        }
    });
}

function readJSON5(path, callback) {

    fs.readFile(path, { encoding : "utf-8"}, function(err, jsonString) {

        //Error Delegation
        if(err) {
            callback(err);
            return; //never forget return!
        }

        try {
            //JSON.parse might throw an error
            callback(null, JSON.parse(jsonString));
        }
        catch(err) {
            callback(err);
        }
    });
}

var readJSON = readJSON3;

///*
readJSON(__dirname + "/data/valid.json", function(err, data) {
    console.log(err, data);
});
//*/

/*
{ valid: true }
 */

/*
readJSON(__dirname + "/data/invalid.json", function(err, data) {
    console.log(err, data);
});
//*/

/*
undefined:2
    valid : false
    ^
SyntaxError: Unexpected token v
    at Object.parse (native)
    at readJSON.js:6:23
    at fs.js:266:14
    at Object.oncomplete (fs.js:107:15)
 */

/*
readJSON(__dirname + "/wrongPath/invalid.json", function(err, data) {
    console.log(err, data);
});
*/

/*
undefined:1
undefined
^
SyntaxError: Unexpected token u
    at Object.parse (native)
    at readJSON.js:6:23
    at fs.js:207:20
    at Object.oncomplete (fs.js:107:15)

*/



exports.readJSON1 = readJSON1;
exports.readJSON2 = readJSON2;
exports.readJSON3 = readJSON3;
exports.readJSON4 = readJSON4;
exports.readJSON5 = readJSON5;
