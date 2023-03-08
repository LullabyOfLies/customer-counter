let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
var d = new Date();
var n = d.toLocaleTimeString();

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = "\n" + n + ": " + count + " people\n"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
