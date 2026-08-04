// int a = 23;

// a = "Hello world!!!"

// console.log(a);

// var a = "Hello World!!!!";

// console.log(a);

// a = 23;

// console.log(a);

// a = false;

// console.log(a);

// var b = 23;

// var c = "0";

// console.log(b - c + (b * c)); // Type Coercion

// var d = Boolean(c);

// console.log(typeof d);
// console.log(`value of d is ` + d);

// while ("Helloo"){
//     // SomeCode
//     console.log(`Inside while loop`);
// }

// var a;

// console.log(a);
// console.log(typeof a);

// var x = null;
// console.log(x);
// console.log(typeof x);

// console.log(typeof (a - x));

// var a = 23; // 0
// var b = 45;
// var c = 90;
// var d = 23;

// console.log(a && (b && c));

// console.log((a ^ d) && (b || c));

var newFn = function get(a, b) {
    var c = a + b;
    return "Hello" + c;
}

function post(fun1, a, b) {
    var x = fun1(a, b);
    return x;
}

console.log(post(newFn, 12, 34));

// console.log(get(23, 45));

// function Car(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }

// var Pagani = new Car("Pagani", 2022, "Yellow");

// console.log(Pagani);

// console.log(newFn(12, 34));

function gitClass() {
    console.log(`Git class Day - 1`);
}

function product(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

class Person{
    
}