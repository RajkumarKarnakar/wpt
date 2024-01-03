// Import the fs module
var fs = require("fs");

// Create a file that contains numbers only
fs.writeFile("numbers.txt", "1\n2\n3\n4\n5", function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log("File created successfully");
  }
});

// Read from the file
fs.readFile("numbers.txt", "utf8", function(err, data) {
  if (err) {
    console.error(err);
  } else {
    // Split the data by newline and convert to numbers
    var numbers = data.split("\n").map(Number);
    // Calculate the square of each number and the sum of squares
    var squares = numbers.map(function(num) {
      return num * num;
    });
    var sumOfSquares = squares.reduce(function(a, b) {
      return a + b;
    }, 0);
    // Calculate the average of the original set of numbers
    var average = numbers.reduce(function(a, b) {
      return a + b;
    }, 0) / numbers.length;
    // Write the results to another file
    fs.writeFile("results.txt", "Squares: " + squares.join("\n") + "\nTotal: " + sumOfSquares + "\nAverage: " + average, function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log("File written successfully");
      }
    });
  }
});
