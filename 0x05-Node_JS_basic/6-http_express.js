const express = require('express');

const app = express();
const port = 1245;

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
