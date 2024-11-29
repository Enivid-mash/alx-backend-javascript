/**
 * Calculates a number based on the given operation type and two input numbers.
 *
 * @param {string} type The type of operation to perform ('SUM', 'SUBTRACT', or 'DIVIDE').
 * @param {number} a The first input number.
 * @param {number} b The second input number.
 * @returns {number|string} The result of the calculation, or 'Error' if division by zero is attempted.
 */
function calculateNumber(type, a, b) {
  // Round the input numbers to the nearest integer.
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform the calculation based on the given type.
  if (type === 'SUM') {
    // If the type is 'SUM', return the sum of the rounded numbers.
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    // If the type is 'SUBTRACT', return the difference of the rounded numbers.
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    // If the type is 'DIVIDE', check for division by zero.
    if (roundedB === 0) {
      // If division by zero is attempted, return an 'Error' message.
      return 'Error';
    } else {
      // Otherwise, return the quotient of the rounded numbers.
      return roundedA / roundedB;
    }
  }
}

// Export the calculateNumber function for use in other modules.
module.exports = calculateNumber;
