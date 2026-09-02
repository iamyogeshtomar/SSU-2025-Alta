const grandParent = document.querySelector(`#grandparent`);
const parent = document.querySelector(`#parent`);
const child = document.querySelector(`#child`);
const divs = document.querySelectorAll(`div`);
const body = document.querySelector(`body`);

// grandParent.addEventListener(`click`, (e) => {
//     console.log(`grandparent triggered!!!`);
// });

// parent.addEventListener(`click`, (e) => {
//     e.stopPropagation();
//     console.log(`parent triggered!!!`);
// }, { once: true });

// parent.addEventListener(`click`, (e) => {
//     console.log(`parent triggered!!!`);
// }, { capture: true });

// child.addEventListener(`click`, (e) => {
//     console.log(`child triggered!!!`);
// }, { capture: true });

// divs.forEach((div) => {
//     div.addEventListener(`click`, () => {
//         console.log(`Div triggered!!!`)
//     })
// });

function triggerDiv() {
    console.log(`Div Triggered!!!`);
}

function grandParentCall() {
    console.log(`Grandparent Called!!!`);
}

delegation("click", "div", triggerDiv);

delegation("click", "#child", grandParentCall);

function delegation(type, callerElement, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(callerElement)) callback(e);
    });
}

function newDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add("newDiv");
    body.append(newDiv);
    newDiv.style.backgroundColor = "purple";
}