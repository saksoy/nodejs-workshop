var Animal = require("./Animal");

/**
 * @constructor
 */
function SiberianTiger () {

    Animal.call(this);

    /**
     * @type {number}
     */
    this.count = 250;

    /**
     * @type {string}
     */
    this.name = "SiberianTiger";

}

SiberianTiger.prototype = Object.create(Animal.prototype);

module.exports = SiberianTiger;