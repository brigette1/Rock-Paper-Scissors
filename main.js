const choices = ["Rock", "Paper", "Scissors"];
const win = "WIN!";
const lose = "Lost :(";
const tie = "Tie!";
// const notAChoice = "Please enter a valid response - rock, paper, or scissors."
var playerScore = 0;
var computerScore = 0 


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(tie); 
    //} else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") { 
      //  console.log(notAChoice); 
    } else {
        if (playerSelection === "scissors" && computerSelection === choices[1] || playerSelection === "rock" && computerSelection === choices[2] || playerSelection == "paper" && computerSelection === choices[0]) {
            playerScore = playerScore++;
            console.log(win);
        } else {
            computerScore = computerScore++;
            console.log(lose);
        }
    }

    let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(playRound(playerSelection, computerSelection))


}



