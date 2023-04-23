/*
Is Truthy
Using if/else statements, create a JavaScript code in a script tag 
follows the following rules:

If the value is truthy, print true;
If the value is falsy, print the corresponding result:
"The boolean value false is falsy";
"The null value is falsy";
"undefined is falsy";
"The number 0 is falsy (the only falsy number)";
"The empty string is falsy (the only falsy string)";
Values to test:

Input Values	Expected Print
"I am a string"	true
false	        "The boolean value false is falsy"
null            "The null value is falsy"
undefined	    "undefined is falsy"
0	            "The number 0 is falsy (the only falsy number)"
""	            "The empty string is falsy (the only falsy string)"
*/
const TestValue = ["I am a string", false, null, undefined, 0, ""];
const TestSpacing = [
  "",
  "        ",
  "         ",
  "    ",
  "            ",
  "             ",
];
const TestPrint = [
  "true",
  "The boolean value false is falsy",
  "The null value is falsy",
  "undefined is falsy",
  "The number 0 is falsy (the only falsy number)",
  "The empty string is falsy (the only falsy string)",
];

console.log("~~~~~~~~~~~~~~~~~~~ FOR LOOP ~~~~~~~~~~~~~~~~~~~~~~~");
console.log("   Input                     Expected value   ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// loo through each eleemt of the array
for (let index = 0; index < TestValue.length; index++) {
  // display corresponsing message
  console.log(
    "  ",
    TestValue[index],
    TestSpacing[index],
    "  ----->  ",
    TestPrint[index]
  );
}

console.log("~~~~~~~~~~~~~~~~~ IF/ELSE Output ~~~~~~~~~~~~~~~~~~~");
console.log("   Input                     Expected value   ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// loo through each eleemt of the array
for (let index = 0; index < TestValue.length; index++) {
  if (TestValue[index] == true || TestValue[index] == false) {
    // BOOLEAN
    // display corresponsing message
    console.log(
      "  ",
      TestValue[index],
      TestSpacing[index],
      "  ----->  ",
      TestPrint[index]
    );
  } else if (TestValue[index] === null) {
    // NULL
    // display corresponsing message
    console.log(
      "  ",
      TestValue[index],
      TestSpacing[index],
      "  ----->  ",
      TestPrint[index]
    );
  } else if (TestValue[index] === undefined) {
    // UNDEFINED
    // display corresponsing message
    console.log(
      "  ",
      TestValue[index],
      TestSpacing[index],
      "  ----->  ",
      TestPrint[index]
    );
  } else if (TestValue[index] === 0) {
    // 0
    // display corresponsing message
    console.log(
      "  ",
      TestValue[index],
      TestSpacing[index],
      "  ----->  ",
      TestPrint[index]
    );
  } else if (TestValue[index] === "") {
    // BLANK
    // display corresponsing message
    console.log(
      "  ",
      TestValue[index],
      TestSpacing[index],
      "  ----->  ",
      TestPrint[index]
    );
  } else {
    // TRUE since it is not falsy
    // display corresponsing message
    console.log(
      "  ",
      TestValue[index],
      TestSpacing[index],
      "  ----->  ",
      TestPrint[index]
    );
  }
}
