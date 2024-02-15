// Define Variables

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const buttonPlus = document.querySelector("#buttonPlus");
const buttonMultiply = document.querySelector("#buttonMultiply");
const buttonEquals = document.querySelector("#buttonEquals");
const buttonBack = document.querySelector("#buttonBack")
const buttonC = document.querySelector("#buttonC");
const result = document.querySelector("#result");
let moveCounter = 0
let stopInput = false
let stopNumInput = false

// Random number generator
let randomNum = Math.floor(Math.random() * 50) + 1;
let targetNumberPlace = document.querySelector("#targetNumberPlace");
targetNumberPlace.innerText = randomNum;


// Event Listeners

button1.addEventListener("click", function(){
    if (!stopInput && !stopNumInput) {
        result.innerText += 1;
    moveCounter += 1;
    stopNumInput = true
    }
});

button2.addEventListener("click", function(){
    if (!stopInput && !stopNumInput){
    result.innerText += 2;
    moveCounter += 1;
    stopNumInput = true
    }
});

button3.addEventListener("click", function(){
    if (!stopInput && !stopNumInput){
    result.innerText += 3;
    moveCounter += 1;
    stopNumInput = true
}});

button4.addEventListener("click", function(){
    if (!stopInput && !stopNumInput){
    result.innerText += 4
    moveCounter += 1;
    stopNumInput = true
}});

buttonPlus.addEventListener("click", function(){
    if (!stopInput){
    result.innerText += "+"
    stopNumInput = false;
}});

buttonMultiply.addEventListener("click", function(){
    if (!stopInput){
    result.innerText += "*";
    stopNumInput = false;
}});

buttonBack.addEventListener("click", function(){
    if (!stopInput){
    result.innerText = result.innerText.slice(0, -1);
    stopNumInput = false;
}});

buttonC.addEventListener("click", function(){
result.innerText = null;
moveCounter = 0;
stopInput = false
stopNumInput = false;

})

// Calculation

buttonEquals.addEventListener("click", function(){
    stopInput = true;
    // Get the expression from the result element
    let expression = result.innerText;

    // Evaluate the expression using eval()
    let resultValue = eval(expression);

    // Display the result
    if (randomNum === resultValue) {
result.innerText = `You reached ${resultValue} in ${moveCounter} moves`
    }
    else {
        result.innerText = `${resultValue} \n \n Try again`
    }
});
