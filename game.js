// create player action variable (playerSelection)
let playerSelection = "placeholder";
// define rock paper and scissors
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let randomNum = Math.floor(Math.random()* 3) + 1;
let rockButton = rock;
// define wincounts
let winCount = 0;
let computerwinCount = 0;
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

// create 5 game format 
function game(playerSelection) {
    for (let round = 1; round <= 6; round++) {
    // randomization factor
    let randomNum = Math.floor(Math.random()* 3) + 1;
    let computerSelection = computerPlay();
    // Overall Tie Message
    if (round >= 6 && winCount === computerwinCount) {
        return console.log(`You tied with Derek Bot! Hey, it's better than losing.`)
    // Overall Win Message
    }
    else if (round >= 6 && winCount >= 3) {
        return console.log(`You destroyed Derek Bot ${winCount} times! You are number one!`)
    // Overall Loss Message
    }
    else if (round >= 6 && winCount <= 3) {
        return console.log(`Derek Bot crushed you ${computerwinCount} times. Better luck next time.`)
    }
    // Player Selection Prompt
    let playerSelection = prompt('You have three choices. Rock, Paper, or Scissors. Choose one.')
    let newplayerSelection = playerSelection.toLowerCase();
    if (!(playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper" )) {
        computerwinCount++;
        console.warn("You did not choose a valid weapon! I'm giving Bot Derek a point because you tried to cheat.");
    }
    // Rock beats Scissors
    else if (newplayerSelection === "rock" && computerSelection === scissors) {
        winCount++;
        console.log(`You won round ${round}. Your massive boulder destroyed their pair of needles!`);
    // Paper beats Rock
    } else if (newplayerSelection === "paper" && computerSelection === rock) {
        winCount++;
        console.log(`You won round ${round}. Your intricate papyrus beat Derek Bot's tiny pebble!`);
    // Scissors beats Paper
    } else if (newplayerSelection === "scissors" && computerSelection === paper) {
        winCount++;
        console.log(`You won round ${round}. Your steel blades beat Derek Bot's frail sheet!`);
    // tie event
    } else if (newplayerSelection === computerSelection) {
        console.log(`You tied round ${round}. Derek Bot's relaxed ${computerSelection} is aligned with your calm ${newplayerSelection}.`);
    // loss event
    } else {
        computerwinCount++;
        console.log(`You lost round ${round}... Derek Bot's mighty ${computerSelection} beats your decrepit ${newplayerSelection}.`);
    }
    }
}
// show user the result in a string i.e (you win, you lose playerSelection beats computerSelection)



// rps-ui stuff


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', buttonChoice => {
    console.log(button.id);
  });
});