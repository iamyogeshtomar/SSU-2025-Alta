const box = document.querySelector("#box");
const change = document.querySelector("#change");
const list = document.querySelector("#list")
const input = document.querySelector("#text-input")

function greet() {
    console.log("Hello there!!!!");
}

function serve() {
    console.log(`Please have condiments`);
}

change.addEventListener("click", (e) => {
    greet();
    serve();
    console.log("Function working fine!!!");
    console.log(e.target);
    list.innerHTML += `<li class="items">${input.value}</li>`;
    input.value = "";
});

// box.addEventListener("mousemove", (e) => {
//     // console.log(e.x);
//     // console.log(e.y);
//     const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
//     const r = clamp(e.x, 0, 255);
//     const g = clamp(e.y, 0, 255);
//     const b = clamp(((e.x + e.y) / 2), 0, 255);
//     box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0)`;
// });

// change.addEventListener("click", () => {
//     greet();
//     serve();
//     console.log("Function working fine!!!")
// });

// change.onclick = greet;
// change.onclick = serve;

function add(a, b) {
    return a + b;
}

let sum = add(23, 34); //57

sum = 123;

// console.log(sum);