console.log("Hello World from Typescript!");
// Variables:
// A variable is a named memory location that can hold a value. Variables can be used to
// store a wide range of data types, such as numbers, strings, and arrays. A variable is
// declared by specifying its name, data type, and optionally an initial value. Once a
// variable is declared, it can be read and updated in other parts of the program.
// uninitialized variable
var stdName;
stdName = "Alice";
// initialized variable
var stdName2 = "Bob";
// variable cannot be reassigned
var stdName3 = "Carol";
// ERROR: cannot reassign name3
// stdName3 = "Dan"; 
// We know this is a number by looking at the value:
var count = 5;
// Functions:
// TypeScript return type annotations on functions are optional, however you should
// always include them. You can configure ESLint .eslintrc.json to emit an error if a
// function is missing a return type by setting this rule:
// write a function to add 2 nums:
function addNumbers(a, b) {
    return (a + b);
}
console.log(addNumbers(5, 5));
//
function someFunc() { }
// We don't know the type of `value` here:
var result = someFunc();
// This makes things a bit clearer:
var result1 = someFunc();
// using `function`
var sum = function sum(lhs, rhs) {
    return lhs + rhs;
};
// using arrow
var sum0 = function (lhs, rhs) {
    return lhs + rhs;
};
