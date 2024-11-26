const { readFile } = require('fs').promises; // Destructure readFile directly from promises

/**
 * This function asynchronously processes a CSV file and returns student data
 * @param {string} filePath - Path to the CSV file containing student information
 * @returns {Promise<void>} - Resolves with no value upon successful processing
 */
async function processStudentData(filePath) {
  // Object to store student data organized by field
  const studentsByField = {};
  // Object to store the number of students in each field
  const fieldCounts = {};

  try {
    // Read the file contents as a string with UTF-8 encoding
    const fileContents = await readFile(filePath, 'utf-8');

    // Split the contents into lines
    const lines = fileContents.split('\n');

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];

      // Skip empty lines
      if (!line) {
        continue;
      }

      // Split the line into comma-separated fields
      const fields = line.split(',');
      const studentId = fields[3]; // Assuming student ID is in the 4th column

      // Check if student ID already exists in the corresponding field
      if (studentsByField.hasOwnProperty(studentId)) {
        studentsByField[studentId].push(fields[0]); // Add student name to the list
      } else {
        studentsByField[studentId] = [fields[0]]; // Create a new list for the student ID
      }

      // Check if field count exists for this student's field
      if (fieldCounts.hasOwnProperty(studentId)) {
        fieldCounts[studentId]++; // Increment count for existing field
      } else {
        fieldCounts[studentId] = 1; // Initialize count for new field
      }
    }

    // Calculate the number of valid lines (excluding header)
    const totalStudents = lines.length - 1; // Assuming header is in the first line

    console.log(`Number of students: ${totalStudents}`);

    // Loop through each field and its student count
    for (const [fieldId, studentCount] of Object.entries(fieldCounts)) {
      // Skip the header row (assuming "field" is the header)
      if (fieldId !== 'field') {
        const studentList = studentsByField[fieldId].join(', '); // Join student names into a string
        console.log(`Number of students in ${fieldId}: ${studentCount}. List: ${studentList}`);
      }
    }
  } catch (error) {
    console.error('Error processing student data:', error); // Log the actual error message
  }
}

// Export the function for use in other modules
module.exports = processStudentData;
