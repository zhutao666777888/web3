function randomInt(){
    return Math.floor(Math.random()*100)+1;
}
let randomnumber;
let gametimes=10;
let guesses=[];
let state=false;
function startGame(){
    state=true;
    randomnumber=randomInt();
    gametimes=10;
    guesses=[];
    updateDisplay();
}
function playgame(number){
    guesses.push(number);
    gametimes--;
    if(number==randomnumber){
        alert("Congratulations,you finished!");
        displayGameResult(true);
    }else if(gametimes==0){
        alert("Sorry, you lose. The number is " + randomnumber); 
        displayGameResult(false);
    }else {  
        let message = number < randomnumber ? "Too low" : "Too high";  
        alert(message); 
        updateDisplay();  
    }  
}
function updateDisplay() {  
    let displayString = "Guess the number between 1 and 100.<br>You have " + gametimes + " chances left.<br>";  
    displayString += "Previous guesses: " + guesses.join(", ") + "<br>";  
    document.getElementById('gameStatus').innerHTML = displayString;  
  
    if (state===false||gametimes === 0) {  
        let replayButton = document.createElement('button');  
        replayButton.textContent = 'Again';  
        replayButton.onclick = startGame;  
        document.getElementById('gameArea').appendChild(replayButton);  
    }  
} 
function displayGameResult(won) {   
    document.getElementById('gameStatus').innerHTML = "<h2>" + (won ? "You Won!" : "Game Over") + "</h2>";
} 
window.onload = function() {  
    startGame();  
};