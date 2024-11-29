const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
  // Create a spy for the `calculateNumber` function from the `Utils` module
  const utilSpy = sinon.spy(Utils, 'calculateNumber');

  it('validates the usage of the Utils function', () => {
    // Run the `sendPaymentRequestToApi` function with sample values
    sendPaymentRequestToApi(100, 20);

    // Verify that the spy was called exactly once
    expect(utilSpy.calledOnce).to.be.true;
    // Verify that the spy was called with the expected arguments ('SUM', 100, 20)
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the original implementation of `calculateNumber` (optional)
    utilSpy.restore();
  });
});
