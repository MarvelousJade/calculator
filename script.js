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

let firstNum = "";
let operator = "";
let secondNum = "";

function operate(operator, firstNum, secondNum) {
  a = parseInt(firstNum);
  b = parseInt(secondNum);

  switch(operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

const displayExpression = document.querySelector("#displayExpression");
const displayNum = document.querySelector("#displayNum")
const input= document.querySelector("#input");

input.addEventListener("click", (event) => clickHandler(event));

function calculate(operator, firstNumber, secondNumber) {
  return operate(operator, firstNumber, secondNumber);
}

function getNumber(target) {
  if (target.className === "digitals") {
    displayNum.textContent += target.textContent; 
  } 

  if (displayNum.textContent != "" && target.className === "operators") {
    if (firstNum === "") {
      firstNum = displayNum.textContent;
    } else {
      secondNum = displayNum.textContent;
    }
    displayNum.textContent = "";
  }
}

let isCalculatable;

function getOperator(target) {
  isCalculatable = firstNum != "" && secondNum != "" && operator != "";

  if (target.className === "operators") {
    if (isCalculatable) {
      displayNum.textContent = calculate(operator, firstNum, secondNum);
      firstNum = displayNum.textContent;
      secondNum = ""; 
      operator = target.id; 
    } else {
      if (target.id != "=") {
        operator = target.id;
        displayExpression.textContent = firstNum + ` ${target.textContent} ` 
      }
    }
  }
}

function clickHandler(event) {
  let target = event.target;

  getNumber(target);
  getOperator(target);
}
