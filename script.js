const choiceItem = ["rock", "paper", "scissors"];
let computerScore = 0;
let peopleScore = 0;

function getComputerChoice () {
    return choiceItem[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("Same, nobody win.")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return (`You Lose! ${computerSelection} beat ${playerSelection}`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return (`You Win! ${playerSelection} beat ${computerSelection}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return (`You Win! ${playerSelection} beat ${computerSelection}`);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return (`You Lose! ${computerSelection} beat ${playerSelection}`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return (`You Lose! ${computerSelection} beat ${playerSelection}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return (`You Win! ${playerSelection} beat ${computerSelection}`);
    } 
}

let playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();

if ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scisors')) {
    alert("Wrong!!!")
}
    
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));