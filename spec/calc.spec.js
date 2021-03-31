
var add = require('../add');

var sub = require('../sub');

describe("Add Functionality", () => {

    it("should add positive numbers", () => {
        const result = add(4, 5);
        expect(result).toEqual(9);
    });

    it("should add negative numbers", () => {
        const result = add(-4, -5);
        expect(result).toEqual(-9);
    });

});

describe("Sub Functionality", () => {

    it("should sub positive numbers", () => {
        const result = sub(5, 4);
        expect(result).toEqual(1);
    });

    it("should sub negative numbers", () => {
        const result = sub(-5, -4);
        expect(result).toEqual(-1);
    });

});