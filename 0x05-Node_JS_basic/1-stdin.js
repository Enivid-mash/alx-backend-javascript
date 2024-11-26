// Write a prompt to the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if the input is interactive (TTY)
if (process.stdin.isTTY) {
  // If it's interactive, listen for data events
  process.stdin.on('data', (data) => {
    // Print the user's name to the console
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the program
    process.exit();
  });
} else {
  // If it's not interactive, listen for the exit event
  process.stdin.on('data', (data) => {
    // Print the user's name to the console (even if not interactive)
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    // Print a farewell message when the program exits
    process.stdout.write('This important software is now closing\n');
  });
}
