const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const buttonPlus = document.querySelector("#buttonPlus");
const buttonMinus = document.querySelector("#buttonMinus");
const buttonEquals = document.querySelector("#buttonEquals");
const buttonC = document.querySelector("#buttonC");
const result = document.querySelector("#result");
let sum = ""
let operandHolder = ""
let firstOperand = null
let targetNumber = null

button1.addEventListener("click", function() {
result.innerText += 1
});

button2.addEventListener("click", function() {
result.innerText += 2
});

button3.addEventListener("click", function() {
result.innerText += 3
});

buttonC.addEventListener("click", function() {
    result.innerText = ""
    });

buttonMinus.addEventListener("click", function(){
operandHolder = "minus";
    firstOperand = parseFloat(result.innerText);
result.innerText = "";
});

    buttonPlus.addEventListener("click", function() { // Listen for the click event on the addition button
        operandHolder = "plus";
        firstOperand = parseFloat(result.innerText); // Store the current value displayed in the result as the first operand
        result.innerText = ''; // Clear the result for the user to enter the second operand
    });
    
    buttonEquals.addEventListener("click", function() { // Listen for the click event on the equals button
        const secondOperand = parseFloat(result.innerText); // Extract the second operand from the current value displayed in the result
        if (operandHolder == "plus"){
            sum = firstOperand + secondOperand; // Calculate the sum
        }
        else {
            sum = firstOperand - secondOperand
        }
        result.innerText = sum; // Display the result
    });