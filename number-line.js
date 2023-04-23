/*
Number Line
Using if/else if/else statements, JavaScript code in a script tag that 
takes the sum of two numbers and prints the corresponding result:

sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
sum + " is larger than 0";
sum + " is greater than 100";
Values to test:
num1	num2	Expected Print
-----------------------------------------------
50	    51	    "101 is greater than 100"
99	    -2	    "97 is greater than 0"
0	   101	    "101 is greater than 100"
500	  -500	    "0 is equal to 0"
-1000	 0	    "-1000 is a negative number"
-5	     0   	"-5 is a negative number"
*/

const TestValue1 = [50, 99, 0, 500, -1000, -5];
const TestValue2 = [51, -2, 101, -500, 0, 0];
let TestSum = 0;
console.log("");

for (let index = 0; index < TestValue1.length; index++) {
  TestSum = TestValue1[index] + TestValue2[index];
  if (TestSum > 100) {
    console.log(index + 1 + ".  " + TestSum, "is greater than 100");
  } else if (TestSum > 0) {
    console.log(index + 1 + ".  " + TestSum, "is greater than 0");
  } else if (TestSum < 0) {
    console.log(index + 1 + ".  " + TestSum, "is a negative number");
  } else {
    console.log(index + 1 + ".  " + TestSum, "is equal 0");
  }
}
console.log("");
