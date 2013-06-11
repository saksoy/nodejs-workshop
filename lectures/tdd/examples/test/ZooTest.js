var expect = require("chai").expect,
    SiberianTiger = require("../lib/SiberianTiger"),
    Ant = require("../lib/Ant"),
    Zoo = require("../lib/Zoo");

describe("Zoo", function () {


    var ant, tiger, zoo;

    beforeEach(function () {
        ant = new Ant();
        tiger = new SiberianTiger();
        zoo = new Zoo();
    });

});

//describe(".push()", function () {
//
//    beforeEach(function () {
//        zoo.push(ant);
//    });
//
//    it("should push an Ant to the zoo", function () {
//        expect(zoo._park["Ant"][0]).to.equal(ant);
//    });
//
//    it("should push another Ant to the zoo", function () {
//        var anotherAnt = new Ant();
//        zoo.push(anotherAnt);
//
//        expect(zoo._park["Ant"][1]).to.equal(anotherAnt);
//    });
//
//    it("should throw an Error if a Tiger should be pushed into to the zoo", function () {
//        expect(function () {
//            zoo.push(tiger);
//        }).to.throw();
//    });
//
//});
//
//describe(".unshift()", function () {
//
//    beforeEach(function () {
//        zoo.unshift(ant);
//    });
//
//    it("should unshift an Ant to the zoo", function () {
//        expect(zoo._park["Ant"][0]).to.equal(ant);
//    });
//
//    it("should throw an Error if an Tiger should be unshifted to the zoo", function () {
//        expect(function () {
//            zoo.unshift(tiger);
//        }).to.throw();
//    });
//
//});