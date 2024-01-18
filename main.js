const choices = ["Rock", "Paper", "Scissors"];
const win = "WIN!";
const lose = "Lost :(";
var playerScore = 0;
var computerScore = 0 
const newDiv = document.createElement('div');
newDiv.setAttribute("class", "roundResults");

function playRound(playerSelection) {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    if (playerSelection === computerSelection) {
        const newContent = document.createTextNode("Tie!"); 
        newDiv.appendChild(newContent);
        const currentDiv = document.getElementById("results"); 
        document.body.insertBefore(newDiv, currentDiv);
    } else {
        if (playerSelection === "Scissors" && computerSelection === choices[1] || playerSelection === "Rock" && computerSelection === choices[2] || playerSelection == "Paper" && computerSelection === choices[0]) {
            playerScore+=1;
            const newContent = document.createTextNode("WIN!"); 
            newDiv.appendChild(newContent); 
            const currentDiv = document.getElementById("results"); 
            document.body.insertBefore(newDiv, currentDiv);
        } else {
            computerScore+=1;
            const newContent = document.createTextNode("Lose :(");
            newDiv.appendChild(newContent); 
            const currentDiv = document.getElementById("results"); 
            document.body.insertBefore(newDiv, currentDiv); 
        }
    }
}

const rBtn = document.querySelector('#rock'); 
const pBtn = document.querySelector('#paper'); 
const sBtn = document.querySelector('#scissors'); 

rBtn.addEventListener('click', function() {
    let playerSelection = 'Rock';
    playRound(playerSelection);
})

pBtn.addEventListener('click', function() {
    let playerSelection = 'Paper';
    playRound(playerSelection);
})

sBtn.addEventListener('click', function() {
    let playerSelection = 'Scissors'; 
    playRound(playerSelection);
})


