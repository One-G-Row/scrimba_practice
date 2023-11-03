let num1 = 8;
let num2 = 2;
num1.textContent = document.getElementById("num1-el");
num2.textContent = document.getElementById("num2-el");


let total = document.getElementById("sum-el");

function add(){
let one = num1 + num2;
total.textContent = "Total:" + one;
}

function subtract(){
let two = num1 - num2;
total.textContent = "Total:" + two;
}
function divide(){
let three = num1/num2;
total.textContent = "Total:" + three;
}
function multiply(){
let four = num1 * num2;
total.textContent = "Total:" + four;
}