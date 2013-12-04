var mood = require("../mood.js"),
    expect = require("chai").expect;

describe("mood", function () {

    describe("#get", function () {
        it("should return 'happy' if mood hasn't been set yet", function() {
            expect(mood.get()).to.eql("happy");
        });
    });

    describe("#set", function () {
        it("should be able to set the mood", function () {
            mood.set("excited");
            expect(mood.get()).to.eql("excited");
        });
    });
});