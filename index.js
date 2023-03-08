let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let now = new Date();
    let timeStr = now.toLocaleTimeString();
    let countStr = "\n" + timeStr + " : " + count + " people\n"
    saveEl.textContent += "\n" + countStr
    countEl.textContent = 0
    count = 0
}
