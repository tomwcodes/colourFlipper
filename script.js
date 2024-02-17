const colours = ["red", "yellow", "green", "blue", "purple"]
const button = document.getElementById("btn")
const colorText = document.querySelector(".colorText")

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
  }

button.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colours[randomNumber];
colorText.textContent = colours[randomNumber]
})


