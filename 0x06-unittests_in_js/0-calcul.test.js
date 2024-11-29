// Import the calculateNumber function from the 0-calcul.js file
const calculateNumber = require("./0-calcul.js");

// Import the assert module for testing
const assert = require('assert');

// Describe the calculateNumber function and its tests
describe('calculateNumber', () => {
    // Test cases for rounding the first argument (a)
    it('rounding of a', () => {
        // Test case 1: Rounding up to the nearest integer
        assert.equal(calculateNumber(15.78, 2), 18);

        // Test case 2: Rounding down to the nearest integer
        assert.equal(calculateNumber(1.2, 0), 1);

        // Test case 3: Rounding up to the nearest integer
        assert.equal(calculateNumber(3.5, 2), 6);
    });

    // Test cases for rounding the second argument (b)
    it('rounding of b', () => {
        // Test case 1: Rounding up to the nearest integer
        assert.equal(calculateNumber(2, 15.78), 18);

        // Test case 2: Rounding down to the nearest integer
        assert.equal(calculateNumber(0, 1.2), 1);

        // Test case 3: Rounding up to the nearest integer
        assert.equal(calculateNumber(2, 3.5), 6);
    });

    // Test cases for summing the rounded values of a and b
    it('suming of a and b', () => {
        // Test case 1: Rounding both numbers and summing
        assert.equal(calculateNumber(15.78, 2.5), 19);

        // Test case 2: Rounding both numbers and summing
        assert.equal(calculateNumber(1.2, 0.2), 1);

        // Test case 3: Rounding both numbers and summing
        assert.equal(calculateNumber(3.5, 2.7), 7);
    });
});
