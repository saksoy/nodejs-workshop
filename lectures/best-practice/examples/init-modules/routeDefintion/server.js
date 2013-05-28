var express = require('express');
var app = null;

function getInstance() {

    //works only for sync initialization
    if(app === null) {
        app = express();
    }

    return app;
}

module.exports = getInstance;