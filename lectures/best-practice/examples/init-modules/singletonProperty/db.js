var levelup = require("level");

var dbInstance = null;

function connect(callback) {

    levelup(__dirname + "/test", function (err, db) {

        if(err) {
            callback(err);
            return;
        }

        console.log("database connected");

        dbInstance = db;

        //instance neu setzen
        //damit von außen erreichbar
        exports.instance = dbInstance;

        callback(null);
    });
}

function disconnect(callback) {

    if(dbInstance === null) {
        //nothing to do here
        callback(null);
        return;
    }

    dbInstance.close(callback);
}

exports.connect = connect;
exports.disconnect = disconnect;
exports.instance = dbInstance;