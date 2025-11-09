#!/usr/bin/node

// Define the add function
function add(a, b) {
  return a + b;
}

// Get the arguments from the command line and convert them to integers
const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);

// Print the result of the addition
console.log(add(first, second));
