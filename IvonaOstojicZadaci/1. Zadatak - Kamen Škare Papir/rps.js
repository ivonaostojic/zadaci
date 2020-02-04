let options = ['rock', 'scissor', 'paper'];

let playerPoints = 0;
let botPoints = 0;

let playerPointsMessage = document.getElementById("playerPoints");
let botPointsMessage = document.getElementById("botPoints");

let messagesDiv = document.getElementById("game-results");

function play(playerInput) {

    if (messagesDiv.innerHTML === '') {

        let botChoice = selectBotChoice();

        usporedi(playerInput, botChoice);
    }
}


function selectBotChoice() {

    let randomIndex = getRandomInt(options.length);

    let choice = options[randomIndex];

    return choice;
}


function getRandomInt(max) {
    let rndInt = Math.floor(Math.random() * Math.floor(max));
    return rndInt;
}

function usporedi(playerChoice, botChoice) {

    messagesDiv.innerHTML += "<p> You played: " + playerChoice + " </p>";
    messagesDiv.innerHTML += "<p> Bot played:  " + botChoice + " </p>";

    if (playerChoice === botChoice) {
        messagesDiv.innerHTML += "<p> Draw </p>";
    }
    else if (playerChoice === 'rock' && botChoice === 'paper') {
        botPoints++;
        botPointsMessage.innerHTML = "Bot points: " + botPoints;
        messagesDiv.innerHTML += "<p>You lose!</p>";
    }
    else if (playerChoice === 'rock' && botChoice === 'scissor') {
        playerPoints++;
        playerPointsMessage.innerHTML = "Player points: " + playerPoints;
        messagesDiv.innerHTML += "<p>You win!</p>";
    }
    else if (playerChoice === 'scissor' && botChoice === 'rock') {
        botPoints++;
        botPointsMessage.innerHTML = "Bot points: " + botPoints;
        messagesDiv.innerHTML += "<p>You lose!</p>";
    }
    else if (playerChoice === 'scissor' && botChoice === 'paper') {
        playerPoints++;
        playerPointsMessage.innerHTML = "Player points: " + playerPoints;
        messagesDiv.innerHTML += "<p>You win!</p>";
    }
    else if (playerChoice === 'paper' && botChoice === 'rock') {
        playerPoints++;
        playerPointsMessage.innerHTML = "Player points: " + playerPoints;
        messagesDiv.innerHTML += "<p>You win!</p>";
    }
    else if (playerChoice === 'paper' && botChoice === 'scissor') {
        botPoints++;
        botPointsMessage.innerHTML = "Bot points: " + botPoints;
        messagesDiv.innerHTML += "<p>You lose!</p>";
    }

    messagesDiv.innerHTML += "<button  onclick=\"restartGame()\">Play again</button>";
}

function restartGame() {
    messagesDiv.innerHTML = "";
}