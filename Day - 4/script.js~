function Student(firstName, lastName, yob, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yob = yob;
    this.city = city;
    // this.introduce = function () {
    //     console.log(`My name is ${this.firstName} ${this.lastName}`);
    // }
    this.checkThis = function () {
        console.log(this);
    }
}

// function get (){
//     console.log(this);
// }

const dipanshu = new Student("Dipanshu", "Singhal", 2002, "Gurugram");

function getFullName(weather) {
    console.log(`My fullname is ${this.firstName} ${this.lastName}`);
    console.log(`Today's weather is ${weather}`);
}

// getFullName.call(dipanshu, "rainy");
const dipanshuFullName = getFullName.bind(dipanshu, "Stormy");

getFullName.apply(dipanshu, ["Sticky"])

// var firstName = "Yogesh";
// var city = "Delhi";
// console.log("My name is " + firstName + " and I'm from " + city);
// console.log(`My name is ${firstName} and I'm from ${city}`)

// object.__proto__ is dunder proto

// console.log(dipanshu);

// dipanshu.introduce();

const gaurav = Object.create(dipanshu);
const ayush = Object.create(gaurav);
const vishal = Object.create(ayush);
// vishal.firstName = "Vishal";
const vansh = Object.create(vishal);
const prince = Object.create(vansh);

const arr = [1, 2, 43, 56, 5, 6, 7, 8, 9, 23];

arr.push(999);

arr.unshift(1234);

// arr.lengthBata();

Array.prototype.lengthBata = function () {
    console.log(`Aapke array ki length hai ${this.length}`)
}

Array.prototype.push = function () {
    console.log(`Nahi karna push!!!`)
}

<<<<<<< HEAD
function randomFunction() {
    console.log(`Randome text`)
}

console.log(this);




=======
console.log(this);

>>>>>>> cce78f3162424e3743b603b889e23bbfd38b2d13
