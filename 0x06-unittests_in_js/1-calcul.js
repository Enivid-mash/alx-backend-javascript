// Function to calculate numbers based on the given type, a, and b
function calculateNumber(type, a, b) {
    // Round the input numbers a and b to the nearest integer
    const rounded_a = Math.round(a);
    const rounded_b = Math.round(b);

    // Check the type of calculation and perform the operation
    if (type === 'SUM') {
        // If the type is 'SUM', return the sum of the rounded numbers
        return rounded_a + rounded_b;
    } else if (type === 'SUBTRACT') {
        // If the type is 'SUBTRACT', return the difference of the rounded numbers
        return rounded_a - rounded_b;
    } else if (type === 'DIVIDE') {
        // If the type is 'DIVIDE', check for division by zero
        if (rounded_b === 0) {
            // If division by zero is attempted, return an 'Error' message
            return 'Error';
        } else {
            // Otherwise, return the quotient of the rounded numbers
            return rounded_a / rounded_b;
        }
    }
}

// Export the calculateNumber function for use in other modules
module.exports = calculateNumber;
