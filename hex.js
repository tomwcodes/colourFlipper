const hex = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn")
const color = document.querySelector(".color")

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }


button.addEventListener("click", function(){
    let hexValue = "#"
    for(let i = 0; i<6;i++){
    let randomNum = getRandomNumber()
    hexValue += hex[randomNum]
    console.log(hexValue)
}
document.body.style.background = hexValue
color.textContent = hexValue

    
})