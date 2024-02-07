console.log("Hello World from Typescript!");



// Variables:
// A variable is a named memory location that can hold a value. Variables can be used to
// store a wide range of data types, such as numbers, strings, and arrays. A variable is
// declared by specifying its name, data type, and optionally an initial value. Once a
// variable is declared, it can be read and updated in other parts of the program.

//! Type Annotation(explicitly defined variable types)
// uninitialized variable
let stdName: string;
stdName = "Alice";

// initialized variable
let stdName2: string = "Bob";

// variable cannot be reassigned
const stdName3: string = "Carol";
// ERROR: cannot reassign name3
// stdName3 = "Dan"; 

// We know this is a number by looking at the value:
let count = 5;




//! Types in TS
/*  
 *  unknown, any, never
 *  null, void(undefined)
 *  any(number(number enum), bigInt, boolean, string(string enum), symbol(unique symbol), object(array(tuples), function, constructor))
 */



// Functions:
// TypeScript return type annotations on functions are optional, however you should
// always include them. You can configure ESLint .eslintrc.json to emit an error if a
// function is missing a return type by setting this rule:

// write a function to add 2 nums:
function addNumbers(a:number, b:number):number{
    return (a+b);
}
console.log(addNumbers(5,5));



function someFunc(){}
// We don't know the type of `value` here:
let result = someFunc();
// This makes things a bit clearer:
let result1: any = someFunc();


// using `function`
const sum = function sum(lhs: number, rhs: number): number {
    return lhs + rhs;
}
// using arrow
const sum0 = (lhs: number, rhs: number): number => {
return lhs + rhs;
}




// Arrays:
// Arrays offer a way to store and manipulate collections of values of the same type. They
// are defined using square brackets and can be populated with values at initialization, or
// later using various methods such as push() , splice() , and concat() . Arrays can be of a
// fixed length or dynamically resized as needed, and they can be used with various array
// methods to perform common operations like sorting, filtering, and mapping.

// create an array
const numbers: number[] = [1, 2, 3];
let letters: string[] = ["a", "b", "c"];
// iterate over an array
for (let n of numbers) {
 // ...
}
// array method examples
numbers.pop(); // remove last item
const doubled = numbers.map(n => n * 2); // double each number



// Tuples:
// Tuples provide a way to express an array with a fixed number of elements of different
// types, creating a data structure with multiple different types. They can be especially
// handy when dealing with scenarios such as representing coordinates, storing key-value
// pairs, or returning multiple values from a function. Since they are type-checked,
// TypeScript can ensure that the values in the tuple are correct at compile time.


// type aliases for clarity
type Title = string;
type PublishYear = number;

// declare a tuple type
let book: [Title, PublishYear];
// initialize a tuple
book = ["sample", 1980];
// return a tuple from a function
function newBook(): [Title, PublishYear] {
    return ["test", 1999];
}
// destructure a tuple into two variables
const [title, published] = newBook();
// "test", 1999
