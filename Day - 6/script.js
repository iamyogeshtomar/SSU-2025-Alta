// const list = document.getElementById("items-list");
const listItems2 = document.getElementsByClassName("items");

const list = document.querySelector("#items-list")

const listItems = document.querySelectorAll(".items");

const para = document.querySelector("p");

function createHTMLNewElements(tag) {
    const subHeading = document.createElement(tag);
    subHeading.setAttribute("id", "sub-heading");
    subHeading.setAttribute("style", "color:purple");
    subHeading.classList.add("class-1", "sample-class", "end");
    subHeading.textContent = "This is new Heading";
    para.prepend(subHeading);
}