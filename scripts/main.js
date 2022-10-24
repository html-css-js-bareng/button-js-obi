const buttonData = "Hello World";

const button = document.querySelector("#button-first");
const buttonReset = document.querySelector("#button-reset");
const pElement = document.getElementById("result");

button.addEventListener("click", () => {
    pElement.innerText =buttonData;
});

buttonReset.addEventListener("click", () => {
    pElement.innerText = "";
});