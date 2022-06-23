var playBtn = document.querySelector("#play");

function playGame() {
    var userInput = prompt("Please enter r, p, or s");
    if (userInput == "r" || userInput == "R") {

    } else if (userInput == "p" || userInput == "P") {

    } else if (userInput == "s" || userInput == "S") {

    } else {
        alert("Invalid input");
    }
}


playBtn.addEventListener("click", playGame);