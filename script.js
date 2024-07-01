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
const calculator= document.querySelector("#calculator");

calculator.addEventListener("click", (event) => clickHandler(event));

function calculate(operator, firstNumber, secondNumber) {
  return operate(operator, firstNumber, secondNumber);
}

function getNumber(target) {
  if (target.className === "digitals") {
    displayNum.textContent += target.textContent; 
  } 

  isFirstNumExisted = target.id === "=" && firstNum != "";  
  if (displayNum.textContent != "" && target.className === "operators" && (target.id != "=" || isFirstNumExisted)) {
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
      if (target.id === "=") {
        displayExpression.textContent = `${firstNum} ${operator} ${secondNum} = ${calculate(operator, firstNum, secondNum)}`;
      } else {
        displayExpression.textContent = `${calculate(operator, firstNum, secondNum)} ${operator} `;
      }
      firstNum = calculate(operator, firstNum, secondNum);
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

function clear(target) {
  if (target.id === "clear") {
    firstNum = "";
    secondNum = "";
    operator = "";
    displayExpression.textContent = "";
    displayNum.textContent = "";
  }
}

function deleteNum(target) {
  if (target.id === "delete") {
    displayNum.textContent = displayNum.textContent.slice(0, -1);
  }
}

function clickHandler(event) {
  let target = event.target;

  getNumber(target);
  getOperator(target);
  clear(target);
  deleteNum(target);
}
