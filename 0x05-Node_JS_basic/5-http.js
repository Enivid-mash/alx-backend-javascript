const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
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
        let totalStudents = 0;

        for (const line of lines.filter(Boolean)) {
          const fields = line.split(',');
          const grade = fields[3];
          totalStudents++;

          studentLists[grade] = studentLists[grade] || [];
          studentLists[grade].push(fields[0]);

          studentCounts[grade] = (studentCounts[grade] || 0) + 1;
        }

        const output = `Number of students: ${totalStudents}\n`;
        for (const [grade, count] of Object.entries(studentCounts)) {
          if (grade !== 'field') {
            output += `Number of students in ${grade}: ${count}. `;
            output += `List: ${studentLists[grade].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const output = await countStudents(process.argv[2]);
      res.end(output.slice(0, -1));
    } catch (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
