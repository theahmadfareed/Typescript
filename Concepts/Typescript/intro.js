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
function createUser() {
    return { name: "ali", age: 30, sex: "male" };
}
console.log(createUser());
function createUser1(obj) {
    return { name: obj.name, age: obj.age, sex: "male" };
}
console.log(createUser1({ name: "ali", age: 30 }));
//! Union
var score = 55;
score = 10;
score = "10";
var ali = { id: 1, user: "ali" };
ali = { id: 1, admin: "ali" };
console.log(ali);
function getDbId(id) {
    if (typeof id === 'number') {
        console.log("DB id is ".concat(id));
    }
    else {
        return id;
    }
}
getDbId(1);
console.log(getDbId("1"));
//! Arrays:
// Arrays offer a way to store and manipulate collections of values of the same type. They
// are defined using square brackets and can be populated with values at initialization, or
// later using various methods such as push() , splice() , and concat() . Arrays can be of a
// fixed length or dynamically resized as needed, and they can be used with various array
// methods to perform common operations like sorting, filtering, and mapping.
// create an array
var numbers2 = [1, 2, 3];
var letters2 = ["a", "b", "c"];
var mix = [1, "b", true];
// iterate over an array
for (var _a = 0, numbers2_1 = numbers2; _a < numbers2_1.length; _a++) {
    var n = numbers2_1[_a];
    // ...
}
// array method examples
numbers2.pop(); // remove last item
var doubled2 = numbers2.map(function (n) { return n * 2; }); // double each number
// declare a tuple type
var rgb = [255, 255, 255];
var book1;
// initialize a tuple
book1 = ["sample", 1980];
// return a tuple from a function
function newBook1() {
    return ["test", 1999];
}
// destructure a tuple into two variables
var _b = newBook1(), title1 = _b[0], published1 = _b[1];
var std = {
    name: "Khalid",
    email: "a@gmail.com",
    age: 30,
    sex: "male",
    startTrial: function () { return true; },
    getCoupon: function (name, value) {
        return value;
    },
    hello: function () {
        return "Hello from Interfaces!";
    },
    bye: function () {
        return "Hello from Interfaces!";
    }
};
console.log(std);
console.log(std.name);
console.log(std.age);
console.log(std.email);
console.log(std.sex);
console.log(std.startTrial());
console.log(std.getCoupon(std.name, 1));
console.log(std.hello());
console.log(std.bye());
//! 
//! 
