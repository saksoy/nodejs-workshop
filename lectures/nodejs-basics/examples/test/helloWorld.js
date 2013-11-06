//hello.js
function hello(who) {
    console.log("hello " + who);
}

function helloWorld() { hello("world"); }

function helloSun() { hello("sun"); }

exports.helloWorld = helloWorld;
exports.helloSun = helloSun;