// 1st Party
const MyPromise = new Promise((resolve, reject) => {
    const a = 1000001;
    if (a % 2 === 0) {
        resolve(a);
    }
    else {
        reject("Try Again!!!");
    }
});

console.log(`Welcome to our service!!!!`);

setTimeout(() => {
    const num = 12;
    console.log(`Somebody has arrived!!!`);
    if (num % 2 === 0) {
        console.log(`Num is even`);
    }
    else {
        console.log(`num is odd!!!`)
    }
}, 5000);

// 2nd Party
MyPromise
    .then((victory) => {
        console.log(`I won a lottery of ${victory}`);
        const donation = victory / 10;
        return donation;
    })
    .then((donation) => {
        console.log(`I'm donating ${donation / 2}`);
        return donation / 2;
    })
    .then((chillar) => {
        console.log(`Finally got some ${chillar}left `);
        return chillar;
    })
    .then((SuccessValiValue) => { })
    .catch((badNews) => { console.log(badNews) });

console.log(`Expecting you again!!!`);