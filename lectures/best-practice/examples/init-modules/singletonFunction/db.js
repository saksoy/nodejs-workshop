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

function getInstance() {
    return dbInstance;
}

exports.connect = connect;
exports.disconnect = disconnect;
exports.getInstance = getInstance;