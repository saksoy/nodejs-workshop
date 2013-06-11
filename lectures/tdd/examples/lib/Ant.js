var Animal = require("./Animal");

function Ant () {

    Animal.call(this);

    /**
     * @type {undefined}
     */
    this.count = undefined;

    /**
     * @type {string}
     */
    this.name = "Ant";
}

Ant.prototype = Object.create(Animal.prototype);

module.exports = Ant;