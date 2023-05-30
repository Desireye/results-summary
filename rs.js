let num1 = 80
let num2 = 92
let num3 = 61
let num4 = 72

document.getElementById("percent-r").textContent = num1
document.getElementById("percent-m").textContent = num2
document.getElementById("percent-ve").textContent = num3
document.getElementById("percent-vi").textContent = num4
result = document.getElementById("result")

function calc() {
    ave = (num1 + num2 + num3 + num4) / 4
    result.textContent = ave
}