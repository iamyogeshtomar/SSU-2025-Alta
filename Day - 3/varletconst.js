// var vs let vs const 

var a; // Declaration
var a = 12; // Reinitialization and Redeclaration
a = 23; // Re-assignment

let b; // Declaration
b = 12; // Initialization
b = 23; // assignment
// Re-declaration and re-initialization

const c = 90;
// c = 45;
// c = 67;

// declaration , re-assignment and re-initialization not allowed in const

const shimpu = {
    name: "Shimpu",
    age: 25,
}

shimpu.name = "shimpu";
shimpu.age = 23;

console.log(shimpu);

// {
//     let a = 12;
// }

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i) }, 1000);
// }

// var i = 0;
// {
//     i = 0; // i++
//     i = 1; // i++
//     i = 2; // i++
//     i = 4; // i++
//     i = 5; // i++
// }

// let i = 0;
// {
//     i = 0 // i++
// }
// {
//     i = 1 // i++
// }
// {
//     i = 2 // i++
// }

// console.log(y);

console.log(x);

let x = 56;