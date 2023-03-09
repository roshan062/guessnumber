'use strict'

const randomNumber = Math.floor((Math.random() * 20) + 1);
console.log(randomNumber);

// Printing the high score saved in the localStorage
var hscore = localStorage.getItem("highscore");
document.querySelector(".highscore").textContent = hscore;


document.querySelector(".check").addEventListener("click", function () {

    // changing ongoing game current score whenever user clicks on check button.
    var score = Number(document.querySelector(".score").textContent);
    score = score - 1;
    if (score === 0) {
        document.querySelector(".message").textContent = "Oops..., you lost the game, try again.";
        document.body.style.backgroundColor = "red";
        function alertFunc() {
            alert(`Oops..., you lost the game. Click OK to restart the game.`)
            location.reload();
        }
        const myTime = setTimeout(alertFunc, 1000);
    }  


    console.log("Current Score is : " + score);
    document.querySelector(".score").textContent = score;


    const guessNumber = Number(document.querySelector(".guess").value);
    if (guessNumber) {     // when user enters any true or non-zero value
        if (randomNumber > guessNumber) {
            document.querySelector(".message").textContent = "Your number is too Low";
        }
        else if (randomNumber < guessNumber) {
            document.querySelector(".message").textContent = "Your number is too High";
        }
        else {
            document.querySelector(".message").textContent = "Correct Number";
            document.querySelector(".number").textContent = randomNumber;
            document.body.style.backgroundColor = "#60b347";
            var currentScore = score;

            function alertFunc() {
                alert(`Game Over. Your score is: ${score}. Click OK to restart the game.`)
                location.reload();
            }
            const myTime = setTimeout(alertFunc, 1000);

        }


        // checking, saving and updating game high score
        var hscore = Number(document.querySelector(".highscore").textContent);
        if (currentScore > hscore) {

            localStorage.setItem("highscore", currentScore);
        }

    }
    else {  //when user enters zero which is a falsey value.
        document.querySelector(".message").textContent = "Please enter any non-zero number";

    }
})

document.querySelector(".again").addEventListener("click", function () {
    location.reload();
})
