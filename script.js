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

// Random number generator
let randomNum = Math.floor(Math.random() * 50) + 1;
let targetNumberPlace = document.querySelector("#targetNumberPlace");
targetNumberPlace.innerText = randomNum;


// Event Listeners

button1.addEventListener("click", function(){
    if (!stopInput){
    result.innerText += 1;
    moveCounter += 1;
    }
});

button2.addEventListener("click", function(){
    if (!stopInput){
    result.innerText += 2;
    moveCounter += 1;
    }
});

button3.addEventListener("click", function(){
    if (!stopInput){
    result.innerText += 3;
    moveCounter += 1;
}});

button4.addEventListener("click", function(){
    if (!stopInput){
    result.innerText += 4
    moveCounter += 1;
}});

buttonPlus.addEventListener("click", function(){
    if (!stopInput){
    result.innerText += "+"
}});

buttonMultiply.addEventListener("click", function(){
    if (!stopInput){
    result.innerText += "*";
}});

buttonBack.addEventListener("click", function(){
    if (!stopInput){
    result.innerText = result.innerText.slice(0, -1);
}});

buttonC.addEventListener("click", function(){
result.innerText = null;
moveCounter = 0;

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


    // Log the values for debugging
    console.log("Random Number:", randomNum);
    console.log("Result Value:", resultValue);