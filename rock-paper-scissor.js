const totalRounds = 5;

const scoreElement = document.getElementById("score");
const roundElement = document.getElementById("round");

let currentRound = parseInt(roundElement.textContent);
let currentScore = parseInt(scoreElement.textContent);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0; // draw
  }

  const winningConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  return winningConditions[playerSelection] === computerSelection ? 1 : 0;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  currentScore += determineWinner(playerSelection, computerSelection);
  currentRound++;

  scoreElement.textContent = currentScore;
  roundElement.textContent = currentScore.toString().padStart(2, "0");

  if (currentRound === totalRounds) {
    displayGameResult();
    resetGame();
  }
}

function displayGameResult() {
  const middle = totalRounds / 2;

  if (currentScore > middle) {
    console.log("You Won!");
  } else if (currentScore < middle) {
    console.log("You Lost!");
  } else {
    console.log("Draw!");
  }
}

function resetGame() {
  currentRound = 0;
  currentScore = 0;

  roundElement.textContent = currentScore.toString().padStart(2, "0");
  scoreElement.textContent = currentScore;
}

const choices = ['rock', 'paper', 'scissors'];
choices.forEach(choice => {
  const button = document.getElementById(choice);
  button.addEventListener('click', () => {
    playRound(choice, getComputerChoice());
  });
});
