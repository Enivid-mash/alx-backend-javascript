const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');

        const studentCounts = {};
        const studentLists = {};
        let studentCount = 0;

        for (let i = 0; i < lines.length; i++) {
          if (lines[i]) {
            studentCount++;
            const field = lines[i].split(',');

            if (field[3] in students) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            fields[field[3]] = (fields[field[3]] || 0) + 1;
          }
        }

        const output = `Number of students: ${studentCount}\n`;

        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(process.argv[2].toString());
    res.send(['This is the list of our students', output].join('\n'));
  } catch (err) {
    console.error(err);
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
});

module.exports = app;
