// console.log(`Line 1 executed!!!`);

const myPromise = new Promise((yes, no) => {
    const a = 12345;
    if (a % 2 === 0) yes(a);
    else no(`Try again!!!`);
});

// setTimeout(() => { console.log(`Hello from Timer 1!!!!`) }, 0);

// myPromise.then((message) => { console.log(message) }).catch((err) => { console.log(err) });

// setTimeout(() => { console.log(`Hello from Timer 2!!!`) }, 1000);

// console.log(`Last line executed!!!`);

// const kunal = {
//     name: "Kunal",
//     age: 23,
//     city: "gurugram",
// }

// Fetch API

//If youn declare a function asynchronous, then it will always return promise
async function getUsersData() {

    try {
        const usersData = await fetch(`https://api.github.com/users/iamyogeshtomar`);
        const data = await usersData.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }

    // try {
    //     const message = await myPromise;
    //     console.log(message)
    // } catch (error) {
    //     console.log(`Code failed beacause of ${error}`);
    // }


    // usersData.then((response) => { return response.json() }, () => { }).then((data) => { console.log(data) }, () => { }).catch((err) => { console.log(err) });
}

const ghUsersData = getUsersData();

// console.log(ghUsersData);