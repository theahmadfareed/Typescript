console.log("Generics");
//! Generics
var sc = [];
var nm = [];
function identity1(val) {
    return true;
}
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
}
//G with Arrays
function identity4(prod) {
    return prod[3];
}
//G with Arrow Functions
var identity5 = function (param) {
    return param[3];
};
//G with Classes
function anotherFunc(val1, val2) {
    return {
        val1: val1,
        val2: val2,
    };
}
anotherFunc(1, 1);
function anotherFunc1(val1, val2) {
    return {
        val1: val1,
        val2: val2,
    };
}
anotherFunc1(1, { a: 1, b: 2, c: 3 });
var d2 = /** @class */ (function () {
    function d2(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.a = a;
        this.b = b;
        this.c = c;
    }
    return d2;
}());
function anotherFunc2(val1, val2) {
    return {
        val1: val1,
        val2: val2,
    };
}
var d0 = new d2(1, 2, 3);
anotherFunc2(1, d0);
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (prod) {
        this.cart.push(prod);
    };
    return Sellable;
}());
