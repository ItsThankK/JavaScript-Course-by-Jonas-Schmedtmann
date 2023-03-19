'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener("click", function() {
    let guess = Number(document.querySelector(".guess").value);

    console.log(guess);
    if(score >= 1) {
    if(!guess) {
        alert("Input a number before clicking check!")
    } else if(guess === secretNumber) {
        document.querySelector(".message").textContent = "Congratulation! You guessed the correct number!";
        score += 1;

        document.querySelector(".score").textContent = score;

        document.querySelector(".highscore").textContent = highscore;

        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector("div").style.width = "30rem";

        if(score > highscore) {
            highscore = score;

            document.querySelector(".highscore").textContent = score;
        } else {
            document.querySelector(".highscore").textContent = highscore;
        }

    } else if(guess > secretNumber) {
        document.querySelector(".message").textContent = " This number is too high!";
        score -= 1;
        document.querySelector(".score").textContent = score;

    } else if(guess < secretNumber) {
        document.querySelector(".message").textContent = " This number is too low!";
        score -= 1;
        document.querySelector(".score").textContent = score;
    } 
} else (alert("You are out of scores, you have lost the game!"))
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing";
    document.querySelector(".number").textContent = "?"
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").textContent = "";

    document.querySelector("body").style.backgroundColor = "#222"

    document.querySelector("div").style.width = "15rem"
})