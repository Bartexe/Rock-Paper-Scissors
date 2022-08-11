const choiceItem = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice () {
    return choiceItem[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert("Same, nobody win.")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert(`You Lose! ${computerSelection} beat ${playerSelection}`);
        return computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert(`You Win! ${playerSelection} beat ${computerSelection}`);
        return playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert(`You Win! ${playerSelection} beat ${computerSelection}`);
        return playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert(`You Lose! ${computerSelection} beat ${playerSelection}`);
        return computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert(`You Lose! ${computerSelection} beat ${playerSelection}`);
        return computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert(`You Win! ${playerSelection} beat ${computerSelection}`);
        return playerScore++;
    } 
}

// if ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scisors')) {
//     alert("Wrong!!!")
// }

function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();

if (computerScore === playerScore) {
    alert("Win friendship! " + "Comp: " + computerScore + "   "+ playerScore + " :Player")
} else if (computerScore > playerScore) {
    alert("Computer Win!" + "Comp: " + computerScore + "   "+ playerScore + " :Player")
} else {
    alert("Player Win!" + "Comp: " + computerScore + "   "+ playerScore + " :Player")
}