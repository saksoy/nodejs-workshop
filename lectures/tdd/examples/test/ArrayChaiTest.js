var expect = require("chai").expect;

describe("Array (Chai)", function () {
    describe('.indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(4)).to.equal(-1);
            expect([1, 2, 3].indexOf(0)).to.equal(-1);
        });
    });
});