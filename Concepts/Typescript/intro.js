console.log("Hello World from Typescript!");
// Data Types.
// let variableName:type = value
//! Types in TS
/*
 *  unknown, any, never
 *  null, void(undefined)
 *  any(number(number enum), bigInt, boolean, string(string enum), symbol(unique symbol), object(array(tuples), function, constructor))
 */
//! Type Inferance
/*
* let userId = 33.5
*/
//! Type Innotation
/*
* let userId:number = 33.5
*/
//! Functions
// Functions:
// TypeScript return type annotations on functions are optional, however you should
// always include them. You can configure ESLint .eslintrc.json to emit an error if a
// function is missing a return type by setting this rule:
// write a function to add 2 nums:
function someFunc() {
    return "hola";
}
// We don't know the type of `value` here:
var result2 = someFunc();
// This makes things a bit clearer:
var result3 = someFunc();
// using 'Function Declaration'
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 5));
// using 'Function Expression'
var sum1 = function sum(lhs, rhs) {
    return lhs + rhs;
};
console.log(sum1(5, 5));
// using 'Arrow Functions'
var sum2 = function (lhs, rhs) {
    return lhs + rhs;
};
console.log(sum2(5, 5));
//! Arrays:
// Arrays offer a way to store and manipulate collections of values of the same type. They
// are defined using square brackets and can be populated with values at initialization, or
// later using various methods such as push() , splice() , and concat() . Arrays can be of a
// fixed length or dynamically resized as needed, and they can be used with various array
// methods to perform common operations like sorting, filtering, and mapping.
// create an array
var numbers1 = [1, 2, 3];
var letters1 = ["a", "b", "c"];
// iterate over an array
for (var _i = 0, numbers1_1 = numbers1; _i < numbers1_1.length; _i++) {
    var n = numbers1_1[_i];
    console.log(n);
}
// array method examples
letters1.pop(); // remove last item
var doubled1 = numbers1.map(function (n) { return n * 2; }); // double each number
//! Objects
function createUser(_a) {
    return { name: "ali", age: 25, sex: "male" };
}
console.log(createUser({ name: "ali", age: 30 }));
function createUser1(obj) {
    return { name: "ali", age: 30, sex: "male" };
}
console.log(createUser1({ name: "ali", age: 30 }));
//! 
//! 
//! 
//! 
