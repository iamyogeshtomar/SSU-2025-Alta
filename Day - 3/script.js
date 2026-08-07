



function get() {
    var a = 23; // Task 1
    return function post() {
        var b = 12;
        console.log(a + b);
    } // Task 2
}
var s = get();

function put() {
    var c = "Hello";
    // console.log("The value of c is : " + c);
    printc();
    // get();
    // console.log(a);
    console.log(b);
}

function printc() {
    console.log("The value of c is : " + c);
}

// printc();


s(); // Closure

// var s = function post() {
//     var b = 12;
//     console.log(a + b);
// }

