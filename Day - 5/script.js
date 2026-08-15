const arr = [12, 23, 243, 45, 65, 67, 78, 89, 0, 35, 46, 24, 435, 5, 76];

const a23 = [];
for (let i = 0; i < arr.length; i++) {
    a23.push(arr[i] * 2);
}

const doubledArray = arr.map(val => val * 2);

// arr.forEach((val, i) => { console.log(`The value at ${i}th index is ${val}`); });

const evenValues = arr.filter((val) => { if (val % 2 == 0) return val; });

const sum = arr.reduce((sum, val, i) => { return sum += val; })

// console.log(sum);

// console.log(doubledArray);

// console.log(a2)

// const fun = function (){}
// function assert (){}

// function c (){
//     console.log(this);
// }

// c.call();

// (...parameters)=>{...body of function}

// const Person = (name, age) => {
//     this.name = name;
//     this.age = age
// }

// const vansh = new Person("vansh", 23);
// console.log(vansh)


// Rest parameters
const sumUnkown = (name, age, ...numbers) => {
    console.log(`My name is ${name} and I'm ${age}`)
    return numbers.reduce((sum, val) => { return sum += val })
}
// console.log(sumUnkown("Ayush", 26, 12, 23, 34, 56, 67, 67));

const a1 = [12, 23, 34, 45, 56];
const a2 = [98, 87, 767, 65, 45, 7556, 68];
const a3 = [456, 8765, "jsfjaf", "kjsanflnsaf"];

const n = [...a1, ...a3, ...a2]

console.log(n);
