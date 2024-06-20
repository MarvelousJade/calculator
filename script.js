function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
console.log(divide(6, 2));

let firtstNum;
let operator;
let secondNum;

function operate(operator, firtstNum, secondNum) {
  switch(operator) {
    case "+":
      add(firtstNum, secondNum);
      break;
    case "-":
      subtract(firtstNum, secondNum);
      break;
    case "*":
      multiply(firtstNum, secondNum);
      break;
    case "/":
      divide(firtstNum, secondNum);
      break;
  }
}

const display = document.querySelector("#display");
const input= document.querySelector("#input");
let displayValue = [];
let operators = [];

input.addEventListener("click", (event) => clickHandler(event));

function getInput(event) {
  let target = event.target;

  if (target.nodeName === "BUTTON") {
    if (target.className === "operators") {
      operators.push(target.id);
      display.textContent += ` ${target.textContent} `;
    } else {
      displayValue.push(target.textContent);
      display.textContent += target.textContent;
    }
  }
}

function calculate(operator, firtstNum, secondNum) {
  if (operator === "=") {
    operate(operator, firtstNum, secondNum);
  }
}

function clickHandler(event) {
  getInput(event);
}