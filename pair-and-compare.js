/*
Pair and Compare
Using if/else statements and strict equality operators, JavaScript code in a 
script tag that compares two sets of two values. 
Print true if at least one of the pairs is truthy.

Values to test:

param1A	    param1B	    param2A	    param2B	    Expected Print
---------------------------------------------------------------
"cat"	    "cat"	    6   	    "6"      	true
"five"	    5   	    "dog"   	"dawg"	    false
0   	    false   	"horse" 	"horse" 	true
"eight" 	"eight" 	"ate"       "ate"       true
11  	    "eleven"	"four"	    "for"	    false
"cake"	    "cake"  	"pie"   	"pie"   	true
*/

const param1A = ["cat", "five", 0, "eight", 11, "cake"];
const param1B = ["cat", 5, false, "eight", "eleven", "cake"];
const param2A = [6, "dog", "horse", "ate", "four", "pie"];
const param2B = ["6", "dawg", "horse", "ate", "for", "pie"];

console.log("    param1A  param1B  param2A  param2B  Expected Print");
console.log("------------------------------------------------------");

for (let index = 0; index < param1A.length; index++) {
  if (param1A[index] === param1B[index] || param2A[index] === param2B[index]) {
    result = "true";
  } else {
    result = "false";
  }
  console.log(
    " ",
    index + 1,
    "- ",
    param1A[index],
    "  ",
    param1B[index],
    "  ",
    param2A[index],
    "  ",
    param2B[index],
    "  ",
    result
  );
}
