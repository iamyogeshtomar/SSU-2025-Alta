// function getUser() {
//     const name = "Kunal";
//     return name;
// }

// function getItem(user) {
//     if (user) {
//         const product = "Macbook Pro";
//         return product;
//     }
// }

// function getQuantity(item) {
//     if (item) {
//         const total = 5;
//         return total;
//     }
// }

// function getAmount(quantity) {
//     if (quantity > 0) {
//         const amount = 200000;
//         return amount;
//     }
// }

// function getOrder() {
//     if (getAmount(getQuantity(getItem(getUser())))) {
//         console.log(`User ${user} added ${quantity} ${product} of ${amount}`);
//     }
// }

// getOrder();

const messageBox = document.querySelector(`#message-box`);
const stop = document.querySelector(`#stop-message`);

function sendMessage() {
    messageBox.innerHTML += `<h1>Welcome to our page</h1>`;

}

window.onload = function () {
    const id = setInterval(sendMessage, 1000);
    stop.addEventListener(`click`, () => {
        clearInterval(id);
    })
}

// setTimeout(() => { console.log(`Timer 1 Done!!!`) }, 2000);

// setTimeout(() => { console.log(`Timer 2 Done!!!`) }, 4000);

// setTimeout(() => { console.log(`Timer 3 Done!!!`) }, 1000);

// setTimeout(() => { console.log(`Timer 4 Done!!!`) }, 7000);

// setTimeout(() => { console.log(`Timer 5 Done!!!`) }, 3000);