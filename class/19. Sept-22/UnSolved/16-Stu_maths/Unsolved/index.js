// TODO: Import `maths.js`
const maths = require("./maths.js");//taking the function from the other page depending on operation entered
const lib = require("./maths.js");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];//takes the operation entered
const numOne = parseInt(process.argv[3]);//takes the first number value and makes it a number 
const numTwo = parseInt(process.argv[4]);//takes the second number value and makes it a number

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch(operation){//switch between the case depending on the first user input 
case 'sum':
    maths.sum(numOne, numTwo)// preforms the selected function on other page and runs 
    console.log(maths.sum(numOne, numTwo))
    break;
    
    case 'difference':
    maths.difference(numOne, numTwo)
    console.log(maths.difference(numOne, numTwo))
    break;

    case 'product':
    maths.product(numOne, numTwo)
    console.log(maths.product(numOne, numTwo))
    break;

    case 'quotient':
    maths.quotient(numOne, numTwo)
    console.log(maths.quotient(numOne, numTwo))
    break;
}