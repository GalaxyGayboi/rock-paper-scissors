// rps-ui stuff
// selecting results div
const results = document.querySelector('#results');
const currentScore = document.querySelector('#currentScore');
const resultsText = document.createElement('p');
    results.appendChild(resultsText);
// button selection
const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
  playRound("rock");
  if (winCount >= 5)
{
    window.location.assign("https://www.youtube.com/watch?v=Un4p-6lzIpI");
} else if (computerwinCount >= 5) {
    window.location.assign("https://www.youtube.com/watch?v=cbhv3_V_Lkg");
} else {
}
  
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
  playRound("paper");
  if (winCount >= 5)
  {
      window.location.assign("https://www.youtube.com/watch?v=Un4p-6lzIpI");
  } else if (computerwinCount >= 5) {
      window.location.assign("https://www.youtube.com/watch?v=cbhv3_V_Lkg");
  } else {
  }
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
  playRound("scissors");
  if (winCount >= 5)
  {
      window.location.assign("https://www.youtube.com/watch?v=Un4p-6lzIpI");
  } else if (computerwinCount >= 5) {
      window.location.assign("https://www.youtube.com/watch?v=cbhv3_V_Lkg");
  } else {
  }
});
// create player action variable (playerSelection)
let playerSelection = "placeholder";
// define rock paper and scissors
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let randomNum = Math.floor(Math.random()* 3) + 1;
// define wincounts
let winCount = 0;
let computerwinCount = 0;
let round = 0;
// Score Check
const currentScoreText = document.createElement('h1')
    currentScore.appendChild(currentScoreText);
    currentScoreText.textContent = `Your Score: ${winCount} | Bot Derek's Score: ${computerwinCount}`;
if (winCount >= 5)
{
    window.location.assign("http://www.mozilla.org");
} else {
}
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
    let randomNum = Math.floor(Math.random()* 3) + 1;
    let computerSelection = computerPlay();
    let newplayerSelection = playerSelection.toLowerCase();
    // rock beats scissors
    console.log(computerSelection)
    console.log(winCount)
    if (newplayerSelection === "rock" && computerSelection === scissors) { 
        winCount++;
        round++;
        resultsText.style.color = 'green';
        resultsText.textContent = `You won round ${round}. Your massive boulder destroyed their pair of needles!`;
        currentScoreText.textContent = `Your Score: ${winCount} | Bot Derek's Score: ${computerwinCount}`;
       
    // paper beats rock
    } else if (newplayerSelection === "paper" && computerSelection === rock) {
        winCount++;
        round++;
        resultsText.style.color = 'green';
        resultsText.textContent = `You won round ${round}. Your intricate papyrus beat Derek Bot's tiny pebble!`;
        currentScoreText.textContent = `Your Score: ${winCount} | Bot Derek's Score: ${computerwinCount}`;
    // scissors beats paper
    } else if (newplayerSelection === "scissors" && computerSelection === paper) {
        winCount++;
        round++;
        resultsText.style.color = 'green';
        resultsText.textContent = `You won round ${round}. Your steel blades beat Derek Bot's frail sheet!`;
        currentScoreText.textContent = `Your Score: ${winCount} | Bot Derek's Score: ${computerwinCount}`;
    } else if (newplayerSelection === computerSelection) {
        round++;
        resultsText.style.color = 'blue';
        resultsText.textContent = `You tied round ${round}. Derek Bot's relaxed ${computerSelection} is aligned with your calm ${newplayerSelection}.`;
        currentScoreText.textContent = `Your Score: ${winCount} | Bot Derek's Score: ${computerwinCount}`;
    } else {
        computerwinCount++;
        round++;
        resultsText.style.color = 'red';
        resultsText.textContent = `You lost round ${round}... Derek Bot's mighty ${computerSelection} beats your decrepit ${newplayerSelection}.`;
        currentScoreText.textContent = `Your Score: ${winCount} | Bot Derek's Score: ${computerwinCount}`;
        
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



