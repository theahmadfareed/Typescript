console.log("Generics");

//! Generics
const sc: Array<number> = []
const nm: Array<String> = []

function identity1(val:  boolean|number):boolean|number{
    return true
}

function identity2(val:  any):any{
    return val
}

function identity3<Type>(val:Type):Type{
    return val
}

//G with Arrays
function identity4<T>(prod: T[]):T{
    return prod[3]
}

//G with Arrow Functions
const identity5 = <T,>(param: T[]): T => {
    return param[3];
};

//G with Classes
function anotherFunc<T, U extends number>(val1: T, val2: U):object{
    return {
        val1,
        val2,
    }
}
anotherFunc(1,1);
// anotherFunc(1,"1");

interface d1{
    a: number,
    b: number,
    c: number,
}
function anotherFunc1<T, U extends d1>(val1: T, val2: U):object{
    return {
        val1,
        val2,
    }
}
anotherFunc1(1,{a:1,b:2,c:3});

class d2 {
    constructor(public a: number,public b: number,public c: number){
        this.a = a
        this.b = b
        this.c = c
    }
}
function anotherFunc2<T, U extends d2>(val1: T, val2: U):object{
    return {
        val1,
        val2,
    }
}
const d0 = new d2(1,2,3)
anotherFunc2(1, d0);



interface Quiz{
    name: string,
    type: string,
} 
interface Courses{
    name: string,
    author: string,
    subject: string,
} 
class Sellable<T>{
    public cart: T[] = []
    addToCart(prod: T){
        this.cart.push(prod)
    }
}





