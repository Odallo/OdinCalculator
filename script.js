let currentOperator = null;
let operatorSet = false;

function appendValue(value) {
    const firstTextArea = document.getElementById('firstTextArea');
    const secondTextArea = document.getElementById('secondTextArea');

    if (!operatorSet) {
        firstTextArea.value += value;
    } else {
        secondTextArea.value += value;
    }
}

function setOperator(op) {
    operatorSet = true;
    currentOperator = op;
}

function calculateResult() {
    const firstTextArea = document.getElementById('firstTextArea');
    const secondTextArea = document.getElementById('secondTextArea');

    const num1 = parseFloat(firstTextArea.value);
    const num2 = parseFloat(secondTextArea.value);

    if (!currentOperator || isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers and an operator.");
        return;
    }

    const result = operate(currentOperator, num1, num2);
    firstTextArea.value = result;
    secondTextArea.value = '';
    currentOperator = null;
    operatorSet = false;
}

function clearDisplay() {
    document.getElementById('firstTextArea').value = '';
    document.getElementById('secondTextArea').value = '';
    currentOperator = null;
    operatorSet = false;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return num2 !== 0 ? divide(num1, num2) : "Error";
        default:
            return "Unsupported Operation";
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
