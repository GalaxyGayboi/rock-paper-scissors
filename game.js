// create player action variable (playerSelection)
let playerSelection = "placeholder";
// ask user for their choice
// define rock paper and scissors
let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"
// randomize cpuChoice
function computerPlay() {
    randomNum = Math.floor(Math.random()* 3) + 1;
    if (randomNum === 1) {
        return rock;
    } else if (randomNum === 2) {
        return paper;
    } else {
        return scissors;
    }
}
// create cpu action variable (computerSelection)
let computerSelection = computerPlay();
// function that pits userChoice against random cpuChoice (playRound)
function playRound(playerSelection) {
    let newplayerSelection = playerSelection.toLowerCase();
    // rock beats scissors
    console.log(computerSelection)
    if (newplayerSelection === "rock" && computerSelection === scissors) {
        return "You win! Rock beats scissors."
    // paper beats rock
    } else if (newplayerSelection === "paper" && computerSelection === rock) {
        return "You win! Paper beats rock."
    // scissors beats paper
    } else if (newplayerSelection === "scissors" && computerSelection === paper) {
        return "You win! Scissors beats paper."
    } else if (newplayerSelection === computerSelection) {
        return `You tied. Derek's ${computerSelection} is the same as your ${newplayerSelection}.`
    } else {
        return `You lost... ${computerSelection} beats ${newplayerSelection}.`
    }
}


// create 5 game format 
// show user the result in a string i.e (you win, you lose playerSelection beats computerSelection)