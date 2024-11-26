const http = require('http');

const host = '127.0.0.1';
const port = 1245;

/**
 * Creates an HTTP server that responds with "Hello Holberton School!"
 */
const app = http.createServer((request, response) => {
  // Set the response status code to 200 (OK)
  response.statusCode = 200;
  // Set the content type header to plain text
  response.setHeader('Content-Type', 'text/plain');
  // Send the response body
  response.end('Hello Holberton School!');
});

// Start the server on the specified host and port
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
