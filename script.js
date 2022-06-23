var playBtn = document.querySelector("#play");



function playGame() {

    var userInput = prompt("Please enter r, p, or s");
    var computerOutput = math.floor(math.random() * 3);

    if (userInput == "r" || userInput == "R") {
        userInput = 0;

    } else if (userInput == "p" || userInput == "P") {
        userInput = 1;

    } else if (userInput == "s" || userInput == "S") {
        userInput = 2;

    } else {
        alert("Invalid input");
    }

    // Win conditions
if (userInput == computerOutput) {
    alert("Tie");
    // Need code to update tie tally
}

if (userInput = 0 && computerOutput = 1) {
    alert("You lose");
    // Need code to update loss tally
}

if (userInput = 0 && computerOutput = 2) {
    alert("You Win");
    // Need code to update win tally
}

if (userInput = 1 && computerOutput = 0) {
    alert("You Win");
    // Need code to update win tally
}

if (userInput = 1 && computerOutput = 3) {
    alert("You Lose");
    // Need code to update loss tally
}

if (userInput = 3 && computerOutput = 0) {
    alert("You lose");
    // Need code to update loss tally
}

if (userInput = 3 && computerOutput = 2) {
    alert("You Win");
    // Need code to update Win tally
}

}


playBtn.addEventListener("click", playGame);
