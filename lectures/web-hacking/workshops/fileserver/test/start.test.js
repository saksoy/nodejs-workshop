"use strict";

var request = require("superagent"),
    fork = require("child_process").fork,
    http = require("http"),
    path = require("path"),
    fs = require("fs"),
    chai = require("chai"),
    expect = chai.expect;

var indexHtml = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf8"),
    logoGif = fs.readFileSync(path.resolve(__dirname, "../public/logo.gif"), "utf8"),
    mainCss = fs.readFileSync(path.resolve(__dirname, "../public/main.css"), "utf8"),
    notFoundHtml = fs.readFileSync(path.resolve(__dirname, "../public/404.html"), "utf8");

chai.Assertion.includeStack = true;

describe("localhost:3000", function () {

    before(function (done) {
        var child;

        process.on("exit", function onProcessExit() {
            child.kill();
        });

        child = fork(path.resolve(__dirname, "./helper/runServer.js"));

        child.on("message", function () {
            done();
        });

        removeSyncMethods();
    });

    it("should respond on port 3000", function (done) {
        request
            .get("http://localhost:3000")
            .end(function () {
                done();
            });
    });

    describe("GET /", function () {

        var response;

        before(function (done) {
            request
                .get("http://localhost:3000")
                .end(function (res) {
                    response = res;
                    done();
                });
        });

        it("should respond with status code 200", function () {
            expect(response.status).to.equal(200);
        });

        it("should have Content-Type: text/html; charset=utf8", function () {
            expect(response.type).to.equal("text/html");
            expect(response.charset).to.equal("utf8");
        });

        it("should have public/index.html as response body", function () {
            expect(response.text).to.equal(indexHtml);
        });

    });

    describe("POST /", function () {

        it("should respond with status code 403", function (done) {
            request
                .post("http://localhost:3000")
                .send("hi")
                .end(function (res) {
                    expect(res.status).to.equal(403);
                    done();
                });
        });

    });

    describe("PUT /", function () {

        it("should respond with status code 403", function (done) {
            request
                .put("http://localhost:3000")
                .send("hi")
                .end(function (res) {
                    expect(res.status).to.equal(403);
                    done();
                });
        });

    });

    describe("DELETE /", function () {

        it("should respond with status code 403", function (done) {
            request
                .del("http://localhost:3000")
                .send("hi")
                .end(function (res) {
                    expect(res.status).to.equal(403);
                    done();
                });
        });

    });

    describe("GET /logo.gif", function () {

        var response;

        before(function (done) {
            request
                .get("http://localhost:3000/logo.gif")
                .buffer(true)
                .end(function (res) {
                    response = res;
                    done();
                });
        });

        it("should respond with status code 200", function () {
            expect(response.status).to.equal(200);
        });

        it("should have Content-Type: image/gif", function () {
            expect(response.type).to.equal("image/gif");
        });

        it("should have public/logo.gif as response body", function () {
            expect(response.text).to.equal(logoGif);
        });

    });

    describe("GET /main.css", function () {

        var response;

        before(function (done) {
            request
                .get("http://localhost:3000/main.css")
                .end(function (res) {
                    response = res;
                    done();
                });
        });

        it("should respond with status code 200", function () {
            expect(response.status).to.equal(200);
        });

        it("should have Content-Type: text/css", function () {
            expect(response.type).to.equal("text/css");
        });

        it("should have public/main.css as response body", function () {
            expect(response.text).to.equal(mainCss);
        });

    });

    describe("any other route", function () {

        var response;

        before(function (done) {
            request
                .get("http://localhost:3000/some/other/route")
                .end(function (res) {
                    response = res;
                    done();
                });
        });

        it("should respond with status code 404", function () {
            expect(response.status).to.equal(404);
        });

        it("should have Content-Type: text/html", function () {
            expect(response.type).to.equal("text/html");
        });

        it("should have public/404.html as response body", function () {
            expect(response.text).to.equal(notFoundHtml);
        });

    });

    describe("GET '/../package.json'", function () {

        var response;

        before(function (done) {
            request
                .get("http://localhost:3000/../package.json")
                .end(function (res) {
                    response = res;
                    done();
                });
        });

        it("should not be possible to read anything outside the public folder", function () {
            expect(response.status).to.equal(404);
            expect(response.text).to.equal(notFoundHtml);
        });

    });

});

/**
 * Dirty hack to prevent the usage of synchronous fs methods
 */
function removeSyncMethods() {
    var fs = require("fs"),
        isSync = /sync$/i,
        method;

    for (method in fs) {
        if (isSync.test(method)) {
            fs[method] = throwSyncError;
        }
    }
}

function throwSyncError() {
    throw new Error("No synchronous methods allowed");
}