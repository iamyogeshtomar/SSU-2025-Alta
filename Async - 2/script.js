console.log(`Code Start!!!`);

const MyPromise = new Promise((resolve, reject) => {
    const a = 23;
    if (a % 2 === 0) resolve(a);
    else reject(`Try again!!!`);
});

setTimeout(() => { console.log(`Timer 1 going !!!`) }, 1000);

MyPromise.then((num) => { console.log(`The number was ${num}`) }).catch((err) => { console.log(err) });

setTimeout(() => { console.log(`Timer 2 going !!!`) }, 0);

console.log(`Code End!!!`);