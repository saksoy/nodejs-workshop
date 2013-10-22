var chai = require("chai"),
    expect = chai.expect;

describe("modules", function () {

    describe("helloWorld.js", function () {

        var helloWorld;

        before(function () {
            helloWorld = require("./helloWorld.js");
        });

        it("should expose a single function", function () {
            expect(helloWorld).to.be.a("function");
        });

        it("should return 'hello world' when executed", function () {
            expect(helloWorld()).to.eql("hello world");
        });
    });

    describe("stringHelpers.js", function () {

        var stringHelpers;

        before(function () {
            stringHelpers = require("./stringHelpers.js");
        });

        it("should expose the function toLowerCase", function () {
            expect(stringHelpers.toLowerCase).to.be.a("function");
            expect(stringHelpers.toLowerCase("CAPS")).to.eql("caps");
        });

        it("should expose a function toUpperCase", function () {
            expect(stringHelpers.toUpperCase).to.be.a("function");
            expect(stringHelpers.toUpperCase("low")).to.eql("LOW");
        });

        it("should return shortcut methods lc (lowercase) and uc (uppercase)", function () {
            expect(stringHelpers.uc).to.be.a("function");
            expect(stringHelpers.lc).to.be.a("function");
            expect(stringHelpers.uc("low")).to.eql("LOW");
            expect(stringHelpers.lc("CAPS")).to.eql("caps");
        });
    });

    describe("time.js", function () {

        var time;

        before(function () {
            time = require("./time.js");
        });

        it("should expose a property requiredTime (date)", function () {
            expect(time.requiredTime).not.to.be.a("function");
            expect(time.requiredTime).to.be.a("date");
        });

        it("should export a function 'getCurrentTime' which returns the currentTime", function () {
            expect(time.getCurrentTime).to.be.a("function");
            expect(time.getCurrentTime()).to.eql(new Date());
        });

        it("should expose the function 'getTimeSinceRequire' which return the diff since the require", function () {
            expect(time.getTimeSinceRequire).to.be.a("function");
            expect(time.getTimeSinceRequire()).to.eql(new Date() - time.requiredTime);
        });
    });

    describe("names.js", function () {

        var names;

        before(function () {
            names = require("./names.js");
        });

        it("should return the JSON-data in names.json as an object", function () {
            expect(names).to.be.an("object");
            expect(names["Michael"]).to.eql("m");
        });
    });

    describe("animals", function () {

        var animals;

        before(function () {
            animals = require("./animals");
        });

        it("should expose a dog", function () {
            expect(animals.dog).to.be.an("object");
            expect(animals.dog.name).to.eql("pluto");
            expect(animals.dog.bark).to.be.a("function");
        });

        it("should expose a cat", function () {
            expect(animals.cat).to.be.an("object");
            expect(animals.cat.name).to.eql("minka");
            expect(animals.cat.purr).to.be.a("function");
        });
    });

    describe("user", function() {

        var user;

        before(function() {
            user = require("./user.js");
        });

        it("should expose a getName function", function() {
            expect(user.getName).to.be.a("function");
        });

        it("should expose a setName function", function() {
            expect(user.setName).to.be.a("function");
        });

        it("should retrieve the lastName after setting the name", function() {
           user.setName("walter");
           expect(user.getName()).to.eql("walter");
           user.setName("mike");
           expect(user.getName()).to.eql("mike");
        });
    });
});