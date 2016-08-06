​
2
// Setup
3
var testString = "There are 3 cats but 4 dogs.";
4
​
5
// Only change code below this line.
6
​
7
var expression = /\d+/g;  // Change this line
8
​
9
// Only change code above this line
10
​
11
// This code counts the matches of expression in testString
12
var digitCount = testString.match(expression).length;
13
​
