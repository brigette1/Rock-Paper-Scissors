const buttons = document.querySelectorAll('.button');
const rBtn = document.querySelector('#rock');
const pBtn = document.querySelector('#paper'); 
const sBtn = document.querySelector('#scissors');
const resetButton = document.querySelector('#resetButton')

const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

//Play a round of rps 
function playRound(playerSelection) {
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
    if (playerSelection === computerSelection) {
        document.getElementById('roundResultText').textContent = "TIE"
    } else {
        if ((playerSelection === "Scissors" && computerSelection === choices[1]) || 
        (playerSelection === "Rock" && computerSelection === choices[2]) || 
        (playerSelection == "Paper" && computerSelection === choices[0])) {
            document.getElementById('roundResultText').textContent = "You win this round!"
            playerScore += 1
            document.getElementById('playerScore').textContent = "PLAYER SCORE: " + playerScore;
        } else if ((computerSelection === choices[0] && playerSelection === "Scissors") ||
        (computerSelection === choices[1] && playerSelection === "Rock") || 
        (computerSelection === choices[2] && playerSelection === "Paper")) {
            document.getElementById('roundResultText').textContent = "You lost this round..."
            computerScore += 1 
            document.getElementById('computerScore').textContent = "COMPUTER SCORE: " + computerScore;
        }
    }
}

//Begin round by pressing rock, paper, or scissors button
//Player wins at 5 points, loses if computer gets 5 points
buttons.forEach(button => button.addEventListener('click', (event) => {
    const playerSelection = button.textContent;
    playRound(playerSelection);

    if (playerScore === 5) {
        document.getElementById('gameResult').textContent = "GAME WON!"
        document.getElementById('roundResultText').textContent = ""
    } else if (computerScore === 5) {
        document.getElementById('gameResult').textContent = "GAME LOST..."
        document.getElementById('roundResultText').textContent = ""
    }
})) 


//reset score for new game

resetButton.addEventListener('click', (event) => {
    playerScore = 0;
    computerScore = 0; 
    document.getElementById('gameResult').textContent = ""
    document.getElementById('roundResultText').textContent = ""
    document.getElementById('playerScore').textContent = "PLAYER SCORE: 0";
    document.getElementById('computerScore').textContent = "COMPUTER SCORE: 0";
})


