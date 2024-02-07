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


function someFunc(){
    return "hola"
}
// We don't know the type of `value` here:
let result2 = someFunc();
// This makes things a bit clearer:
let result3:string = someFunc();


// using 'Function Declaration'
function addNumbers(a:number, b:number):number{
    return a + b;
}
console.log(addNumbers(5,5));
// using 'Function Expression'
const sum1 = function sum(lhs: number, rhs: number): number {
    return lhs + rhs;
}
console.log(sum1(5,5));
// using 'Arrow Functions'
const sum2 = (lhs: number, rhs: number): number => {
    return lhs + rhs;
}
console.log(sum2(5,5));




//! Arrays:
// Arrays offer a way to store and manipulate collections of values of the same type. They
// are defined using square brackets and can be populated with values at initialization, or
// later using various methods such as push() , splice() , and concat() . Arrays can be of a
// fixed length or dynamically resized as needed, and they can be used with various array
// methods to perform common operations like sorting, filtering, and mapping.

// create an array
const numbers1: number[] = [1, 2, 3];
let letters1: string[] = ["a", "b", "c"];
// iterate over an array
for (let n of numbers1) {
    console.log(n);
}
// array method examples
letters1.pop(); // remove last item
const doubled1 = numbers1.map((n):number => n * 2); // double each number




//! Objects
function createUser({}):{name: string, age: number, sex: string}{
    return {name: "ali", age: 25, sex: "male"}
}
console.log(createUser({name:"ali", age:25}));



//! Type Alisas 
//! readonly, optional (?, &)
type User = {
    readonly name: string,
    age: number,
    sex?: string
}
function createUser1(obj: User): User{
    return {name: "ali", age: 30, sex: "male"}
}
console.log(createUser1({name:"ali", age:30}));



//! Union
//! 
//! 
//! 


