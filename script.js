// Define Variables

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const buttonPlus = document.querySelector("#buttonPlus");
const buttonMinus = document.querySelector("#buttonMinus");
const buttonMultiply = document.querySelector("#buttonMultiply");
const buttonEquals = document.querySelector("#buttonEquals");
const buttonC = document.querySelector("#buttonC");
const result = document.querySelector("#result");

// Random number generator
let randomNum = Math.floor(Math.random() * 50) + 1;
let targetNumberPlace = document.querySelector("#targetNumberPlace");
targetNumberPlace.innerText = randomNum;


// Event Listeners

button1.addEventListener("click", function(){
    result.innerText += 1
});

button2.addEventListener("click", function(){
    result.innerText += 2
});

button3.addEventListener("click", function(){
    result.innerText += 3
});

button4.addEventListener("click", function(){
    result.innerText += 4
});

buttonPlus.addEventListener("click", function(){
    result.innerText += "+"
});

buttonMinus.addEventListener("click", function(){
    result.innerText += "-"
});

buttonMultiply.addEventListener("click", function(){
    result.innerText += "*"
});

buttonC.addEventListener("click", function(){
result.innerText = null

})

// Calculation

buttonEquals.addEventListener("click", function(){
    // Get the expression from the result element
    let expression = result.innerText;

    // Evaluate the expression using eval()
    let resultValue = eval(expression);

    // Display the result
    if (randomNum === resultValue) {
result.innerText = `${resultValue} \n \n Elle you did it`
    }
    else {
        result.innerText = `${resultValue} \n \n Try again`
    }
});


    // Log the values for debugging
    console.log("Random Number:", randomNum);
    console.log("Result Value:", resultValue);