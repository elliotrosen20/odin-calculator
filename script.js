const display = document.querySelector(".display");
const clear = document.querySelector(".clear")

const digits = document.querySelectorAll(".digits")
const operators = document.querySelectorAll(".operators")

let firstNum = "";
let secondNum = "";
let opFunction;

let displayValue = "";
let count = 0;
let op = ""
let newOp = false;

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (newOp) {
            displayValue = "";
            count = 0;
        }
        displayValue += digit.innerText;
        display.textContent = displayValue;
    })
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        newOp = false;
        count++;
        if (count == 1) { 
            firstNum = displayValue;
            console.log(firstNum);
            displayValue = "";
        } else {
            secondNum = displayValue;
            firstNum = String(operate(parseFloat(firstNum), parseFloat(secondNum), opFunction));
            console.log(firstNum);
            display.textContent = firstNum;
            displayValue = "";
            count = 1;
        }

        op = operator.textContent;
        if (op == "/") {
            opFunction = divide;
        } else if (op == "*") {
            opFunction = multiply;
        } else if (op == "-") {
            opFunction = subtract;
        } else if (op == "+") {
            opFunction = add;
        } else if (op == "=") {
            count = 0;
            displayValue = firstNum;
            newOp = true;
        }
    })
});

clear.addEventListener("click", () => {
    displayValue = "";
    count = 0;
    display.textContent = displayValue;
    newOp = false;
})

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


function operate(a, b, opFunction) {
    // operator(a, b);
    return opFunction(a, b)
}