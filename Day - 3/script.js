
// console.log(a);
// console.log(c);
// console.log(d);

var a = 34;

greet();

function greet() {
    var x = "Hellow";
    // var a = 12;
    console.log(`Hello Javascript!!!`);
    console.log(a);

    function get() {
        console.log(++a);
    }
    get();
}

var c; // Decalaration

c = 23; // Assignment

// Initialization  = Declaration + assignment

var d = 12; // Initialization

// console.log(a);
// console.log(c);
// console.log(d);

for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i) }, 1000);
}

// {
//     var i = 0;
//     i++;
//     i++;
//     i++;
// }
// {
//     // For i0 = 0;
//     // return to next
//     i++
// }
// {
//     // For i1 = i0;
// }
// {
//     // For i2 = i1;
// }
// {
//     // For i3 = i2;
// }
// {
//     // For i4 = i3;
// }