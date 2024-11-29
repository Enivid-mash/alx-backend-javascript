const Utils = require('./utils');

/**
 * Sends a payment request to an API, calculating the total amount.
 *
 * @param {number} totalAmount The total amount of the order.
 * @param {number} totalShipping The total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  // Calculate the total amount by summing the order amount and shipping cost.
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  // Log the calculated total amount to the console.
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
