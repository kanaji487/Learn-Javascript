let count = 0;
let countEl = document.getElementById("counter-number");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    count -= 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - " + " ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}