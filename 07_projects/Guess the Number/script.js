let randomNumber = Math.floor(Math.random() * 100) + 1;
const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
    if(isNaN(guess)){
       alert(`Please enter a valid number`) 
    }
    else if(guess < 1){
        alert(`Please enter guess more than 1`)
    }
    else if(guess > 100){
        alert(`Please enter a number less than 100`)
    }
    else{
        prevGuess.push(guess);
        if(numGuess > 10){
            cleanField(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            cleanField(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
    }
    else if(guess < randomNumber){
        displayMessage(`Nummber is too low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function cleanField(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
    if(remaining == 0){
        displayMessage(`Game Over`);
        endGame();
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.append(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click",function(e){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        playGame = true;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
    });
}
