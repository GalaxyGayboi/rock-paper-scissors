// create player action variable (playerSelection)
let playerSelection = prompt('You have three choices. Rock, Paper, or Scissors. Choose one.');
// define rock paper and scissors
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let randomNum = Math.floor(Math.random()* 3) + 1;
// 
// randomize cpuChoice
function computerPlay() {
    let randomNum = Math.floor(Math.random()* 3) + 1;
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
        return `You tied. Derek Bot's ${computerSelection} is the same as your ${newplayerSelection}.`
    } else {
        return `You lost... ${computerSelection} beats ${newplayerSelection}.`
    }
}
function playRound2(playerSelection) {
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
        return `You tied. Derek Bot's ${computerSelection} is the same as your ${newplayerSelection}.`
    } else {
        return `You lost... Sadly ${computerSelection} beats ${newplayerSelection}.`
    }
}


// create 5 game format 
function game(playerSelection) {
    for (let round = 1; round <= 6; round++) {
    
    // add prompt for user to input their value
    let playerSelection = prompt('You have three choices. Rock, Paper, or Scissors. Choose one.')
    let newplayerSelection = playerSelection.toLowerCase();
    // rock beats scissors
    console.log(computerSelection)
    if (round >= 6 && winCount === computerwinCount) {
        return console.log(`You tied with Derek Bot! Hey, it's better than losing.`)
    }
    if (round >= 6 && winCount >= 3) {
        return console.log(`You beat Derek Bot ${winCount} times! You are the super winner!`)
    }
    else if (round >= 6 && winCount <= 3) {
        return console.log(`Derek Bot beat you ${5 - winCount} times. Better luck next time.`)
    }
    else if (newplayerSelection === "rock" && computerSelection === scissors) {
        winCount++;
        return console.log(`You win round ${round}. Rock beats scissors.`)
    // paper beats rock
    } else if (newplayerSelection === "paper" && computerSelection === rock) {
        winCount++;
        return console.log(`You win round ${round}. Paper beats rock.`)
    // scissors beats paper
    } else if (newplayerSelection === "scissors" && computerSelection === paper) {
        winCount++;
        return console.log(`You win round ${round}. Scissors beats paper.`)
    } else if (newplayerSelection === computerSelection) {
        return console.log(`You tied round ${round} Derek Bot's ${computerSelection} is the same as your ${newplayerSelection}.`)
    } else {
        computerwinCount++;
        return console.log(`You lost round ${round}... ${computerSelection} beats ${newplayerSelection}.`)
    }
    }
}
// show user the result in a string i.e (you win, you lose playerSelection beats computerSelection)