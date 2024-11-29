const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

// Test suite for the `calculateNumber` function with the 'SUM' type
describe('#calculateNumber() with type SUM', () => {
  // Test case: Adding two positive integers
  it('add 5 and 10', () => {
    expect(calculateNumber('SUM', 5, 10)).to.equal(15);
  });

  // Test case: Adding a positive integer and a positive decimal
  it('add 2 and 2.7', () => {
    expect(calculateNumber('SUM', 2, 2.7)).to.equal(5);
  });

  // Test case: Adding two positive decimals
  it('add 1.0 and 4.0', () => {
    expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);
  });

  // Test case: Adding two positive decimals with rounding
  it('add 1.7 and 3.5', () => {
    expect(calculateNumber('SUM', 1.7, 3.5)).to.equal(6);
  });

  // Test case: Adding two small positive decimals
  it('should return 0 when adding 0.1 and 0.3', () => {
    expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
  });

  // Test case: Adding a negative decimal and a positive decimal
  it('add -0.7 and 0.7', () => {
    expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
  });

  // Test case: Adding two negative decimals
  it('add -0.8 and -0.7', () => {
    expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
  });
});

// Test suite for the `calculateNumber` function with the 'SUBTRACT' type
describe('#calculateNumber() with type SUBTRACT', () => {
  // Test case: Subtracting two positive integers
  it('subtract 1 and 3', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });

  // Test case: Subtracting a positive decimal from a positive decimal
  it('subtract 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  // Test case: Subtracting a positive decimal from a positive decimal with rounding
  it('subtract 1.2 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });

  // Test case: Subtracting a positive decimal from a positive decimal with rounding
  it('subtract 1.5 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });

  // Test case: Subtracting two small positive decimals
  it('subtract 0.1 and 0.3', () => {
    expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
  });

  // Test case: Subtracting a negative decimal from a positive decimal
  it('subtract -0.7 and 0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.7, 0.7)).to.equal(-2);
  });

  // Test case: Subtracting two negative decimals
  it('subtract -0.8 and -0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.8, -0.7)).to.equal(0);
  });

  // Test case: Subtracting a negative decimal from a positive decimal
  it('subtract 0.8 and -0.4', () => {
    expect(calculateNumber('SUBTRACT', 0.8, -0.4)).to.equal(1);
  });
});

// Test suite for the `calculateNumber` function with the 'DIVIDE' type
describe('#calculateNumber() with type DIVIDE', () => {
  // Test case: Dividing two positive integers
  it('divide 1 and 4', () => {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
  });

  // Test case: Dividing a positive integer by a positive decimal
  it('divide 1 and 3.7', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });

  // Test case: Dividing a positive decimal by a positive decimal
  it('divide 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  // Test case: Dividing two positive decimals with rounding
  it('divide 1.6 and 2.4', () => {
    expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);
  });

  // Test case: Dividing two positive decimals with rounding
  it('divide 4.2 and 1.5', () => {
    expect(calculateNumber('DIVIDE', 4.2, 1.5)).to.equal(2);
  });

  // Test case: Dividing by zero
  it("divide 1.3 and 0.3", () => {
    expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
  });

  // Test case: Dividing a negative decimal by a positive decimal
  it('divide -0.7 and 0.7', () => {
    expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
  });

  // Test case: Dividing two negative decimals
  it('divide -0.8 and -0.7', () => {
    expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
  });

  // Test case: Dividing a negative decimal by a positive decimal with rounding
  it('divide -44.5 and 2.4', () => {
    expect(calculateNumber('DIVIDE', -44.5, 2.4)).to.equal(-22);
  });

  // Test case: Dividing two negative decimals with rounding
  it('divide -88.5 and -3.6', () => {
    expect(calculateNumber('DIVIDE', -88.5, -3.6)).to.equal(22);
  });
});
