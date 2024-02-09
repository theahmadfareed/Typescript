console.log("Hello World from Typescript!");


//! Types in TS
// let variableName:type = value
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







//! Tuples:
// Tuples provide a way to express an array with a fixed number of elements of different
// types, creating a data structure with multiple different types. They can be especially
// handy when dealing with scenarios such as representing coordinates, storing key-value
// pairs, or returning multiple values from a function. Since they are type-checked,
// TypeScript can ensure that the values in the tuple are correct at compile time.


// type aliases for clarity
type Title1 = string;
type PublishYear1 = number;

// declare a tuple type
let rgb:[number, number, number] =[255,255,255];
let book1: [Title1, PublishYear1];

// initialize a tuple
book1 = ["sample", 1980];
// return a tuple from a function
function newBook1(): [Title1, PublishYear1] {
    return ["test", 1999];
}
// destructure a tuple into two variables
const [title1, published1] = newBook1();
// "test", 1999






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
// console.log(addNumbers(5,5));
// using 'Function Expression'
const sum1 = function sum(lhs: number, rhs: number): number {
    return lhs + rhs;
}
// console.log(sum1(5,5));
// using 'Arrow Functions'
const sum2 = (lhs: number, rhs: number): number => {
    return lhs + rhs;
}
// console.log(sum2(5,5));







//! Objects
function createUser():{name: string, age: number, sex: string}{
    return {name: "ali", age: 30, sex: "male"}
}
// console.log(createUser());






//! Type Alisas 
//! readonly, optional (?, &)
type User = {
    readonly name: string,
    age: number,
    sex?: string
}
function createUser1(obj: User): User{
    return {name: obj.name, age: obj.age, sex: "male"}
}
// console.log(createUser1({name:"ali", age:30}));






//! Union
let score: number|string = 55;
score = 10
score = "10"

type user = {id: number, user: string}
type admin = {id: number, admin: string}

let ali: user|admin = {id: 1, user: "ali"};
ali = {id: 1, admin: "ali"};
// console.log(ali);


function getDbId(id: number|string){
    //Narrowing
    if(typeof id === 'number'){
        console.log(`DB id is ${id}`);
    }
    else{
        return id
    }
}
getDbId(1);
// console.log(getDbId("1"));





//! Intersection
type Draggable = {
    drag: ()=>void
}
type Resizable = {
    reSize: ()=>void
}
type UIWidget = Draggable & Resizable
let textBox: UIWidget = {
    drag:()=>{
    },
    reSize:()=>{
    },

}





//! Enum
const enum Sizes {Small=1, Medium, Large};
let mySize: Sizes = Sizes.Medium;
// console.log("My Size = "+mySize);






//! Literal Types
type Quantity = 50|100
type Metric = "cm"|"inch"

let qnt: Quantity  = 100




//! Nullable Types
function nullAble(val: string|null|undefined){

}
nullAble(null);
nullAble(undefined);




//! Optional Chaining(?:,?.)
type Customer = {
    birthday:Date
};

function getCustomer(id: number): Customer|null|undefined{
    return id===0 ? null : {birthday: new Date()}
}
let customer = getCustomer(0)

// Optional Property access operator
console.log(customer?.birthday?.getFullYear());

// Optional Element access operator
// if(customer?.[0])

//Optional Call
let log:any = null
log?.("a")






//! Interface
interface Student1{
    readonly name: string,
    email: string,
    age: number,
    sex?: string,
    // getTrial: () => boolean
    startTrial():boolean,
    getCoupon(name: string, value: number):number
}
interface Student1{
    hello():string,
}
interface Student2 extends Student1{
    bye():string,
}

const std: Student2 = {
    name: "Khalid",
    email: "a@gmail.com",
    age: 30,
    sex: "male",
    startTrial:()=>{return true},
    getCoupon:(name:string,value:number)=>{
        return value
    },
    hello:()=>{
        return "Hello from Interfaces!"
    },
    bye:()=>{
        return "Bye from Interfaces!"
    }

}
// console.log(std);
// console.log(std.name);
// console.log(std.age);
// console.log(std.email);
// console.log(std.sex);
// console.log(std.startTrial());
// console.log(std.getCoupon(std.name,1));
// console.log(std.hello());
// console.log(std.bye());





//! Private(Getter, Setter), Protected, Public
class Boss1 {
    private _sex:string = "male";
    protected _uni:string = "Comsats"
    constructor(readonly name:string, private _email:string){
        this.name = name;
        this._email = _email;
    }
    get getEmail(): string {
        return `Email = ${this._email}`;
    }
    set setEmail(email: string) {
        this._email = email;
    }
    set setUni(uni: string) {
        this._uni = uni;
    }
    private noAccess(): void {
        console.log("Inside class only");
    }
}
class Boss2 extends Boss1{
    role:string = "X-Box"
}


const b1 = new Boss1("ali", "a@gmail.com");
// console.log(b1.name);
// console.log(b1.getEmail);
b1.setEmail = "ha5403905@gmail.com";
// console.log(b1);

const b2 = new Boss2("ali", "a@gmail.com");
// console.log(b2);






//! Abstract Class
// classes with no objectss
// class can implements interface
// class extends class
// interface extends interface

abstract class takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}
    abstract getName(): string
}
class Instagram extends takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public name: string
        ){
        super(cameraMode, filter)
    }
    getName(): string {
        return this.name
    }
}
const tp = new Instagram("test","test","ali");
// console.log(tp.getName());




//! Type Narrowing
//! InstanceOf & Type Predicates
type fish = {swim: ()=>void};
type bird = {fly: ()=>void};

function isFish(pet:fish|bird):pet is fish{
    return (pet as fish).swim !== undefined
}

function getFood(pet: fish|bird){
    if(isFish(pet)){
        pet 
        return "fish food"
    } else {
        pet 
        return "bird food"
    }
}




//! Discriminated Union and Exhaustiveness Checking with never



