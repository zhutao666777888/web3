// Function to generate a random integer between 1 and 100, inclusive  
function randomInt() {  
    return Math.floor(Math.random() * 100) + 1;  
}  
  
// Game Logic  
let gameRunning = false;  
let randomNumber = 0;  
let guesses = [];  
let remainingTries = 10;  
  
function startGame() {  
    gameRunning = true;  
    randomNumber = randomInt();  
    guesses = [];  
    remainingTries = 10;  
    updateDisplay();  
}  
  
function guess(number) {  
    if (!gameRunning) {  
        alert("Game not started!");  
        return;  
    }  
  
    guesses.push(number);  
    remainingTries--;  
  
    if (number === randomNumber) {  
        alert("Congratulations! You guessed it right!");  
        displayGameResult(true);  
    } else if (remainingTries === 0) {  
        alert("Sorry, you ran out of tries. The number was " + randomNumber);  
        displayGameResult(false);  
    } else {  
        let message = number < randomNumber ? "Too low!" : "Too high!";  
        alert(message);  
        updateDisplay();  
    }  
}  
  
function updateDisplay() {  
    let displayString = "Guess the number between 1 and 100. You have " + remainingTries + " tries left.<br>";  
    displayString += "Previous guesses: " + guesses.join(", ") + "<br>";  
    document.getElementById('gameStatus').innerHTML = displayString;  
  
    if (!gameRunning || remainingTries === 0) {  
        let replayButton = document.createElement('button');  
        replayButton.textContent = 'Play Again';  
        replayButton.onclick = startGame;  
        document.getElementById('gameArea').appendChild(replayButton);  
    }  
}  
  
function displayGameResult(won) {  
    gameRunning = false;  
    document.getElementById('gameStatus').innerHTML = "<h2>" + (won ? "You Won!" : "Game Over") + "</h2>";  
}  
  
// Optionally, you can initialize the game on page load  
window.onload = function() {  
    startGame();  
};