'use strict';

function greetings () {
    let userGreeting = prompt ("Hello, what's your favorite color?");
    let color = prompt("Whoa, " + userGreeting + " is a great color. What do you think my favorite color is?");
    let guessColor = prompt("I love the color " + color + ", but let's try again!");
    if (guessColor.toLowerCase() == "black") {
      guessColor = prompt("Almost, lets give it another go.");
    } 
    while (guessColor.toLowerCase() != "yellow") {
      guessColor = prompt("How about I give you a hint, it's bright.)");
    }
    return guessColor
}

function colorSelect (colorGuess) {
    if (colorGuess.toLowerCase() == "yellow") {
        document.write("<p id='scotties-band'>" + "Amazing. Yellow is it, but take a look at THIS" + "</p>");
    } else if (colorGuess.toLowerCase() == "black") {
        document.write("<p id='scotties-band'>" + "Now that's the other one. I love that one too. " + "</p>");
    } else {
        document.write("<p id='scotties-band'>" + "Maybe try another color?" + "</p>");
    }
    return colorGuess
}
let colorGuess = greetings ()

colorSelect (colorGuess)

let colorYellow = prompt("Absolute correct. Now give me a number one to ten.");

for (let i = 0; i < colorYellow; i++) {
    document.write("<img id='freddie' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Libya_%281977%E2%80%932011%2C_3-2%29.svg/1200px-Flag_of_Libya_%281977%E2%80%932011%2C_3-2%29.svg.png' />")
}
