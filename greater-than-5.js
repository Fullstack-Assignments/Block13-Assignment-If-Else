/*
Greater Than Or Equal To 5
Using if/else statements, JavaScript code in a script tag that 
prints true 
if both parameters are greater or equal to 5.

Values to test:

num1	num2	Expected Print
5	      6 	true
10	     11	    true
0	      0 	false
1000	-1000	false
6	      4 	false
5   	  5 	true
*/

const num1 = [5, 10, 0, 1000, 6, 5];
const num2 = [6, 11, 0, -1000, 4, 5];

console.log("    num1  num2        Expected Print ");
console.log("------------------------------");

for (let index = 0; index < num1.length; index++) {
  if (num1[index] >= 5 && num2[index] >= 5) {
    result = "true";
  } else {
    result = "false";
  }
  console.log(
    index,
    "-  ",
    num1[index],
    "   ",
    num2[index],
    "         ",
    result
  );
}
