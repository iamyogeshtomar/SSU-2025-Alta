const a = 23;
let b = a;

console.log(b);


const kunal = {
    name: "Kunal",
    age: 23,
    city: "Gurugram",
    address: {
        flatno: 123,
        street: "Golf Course Road",
        landmark: {
            property: "DLF",
            hotel: "Leela",
        }
    }
}

// Stack
// 01Xaranodgfnqpfdmwldmwf

// Heap 
// {}

// const ayush = { ...kunal };


const ayush = structuredClone(kunal);

ayush.address.street = "Raghvendra MArg";

const a1 = [1, 2, 34];
const b1 = [23, 34, 46568, 78979, 5231];

const c = [...a1, ...b1];

// console.log(a1);

console.log(ayush);
console.log(kunal);