const CHOICES = {
  0: "draw",
  1: "won",
  2: "lost",
};

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      break;
  }
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return 0;
        case "paper":
          return 2;
        case "scissors":
          return 1;
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          return 1;
        case "paper":
          return 0;
        case "scissors":
          return 2;
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return 2;
        case "paper":
          return 1;
        case "scissors":
          return 0;
      }
    default:
      throw "Invalid choice: You can only choose Rock/Paper/Scissors"
  }
}

let score = 0;
for (i = 0; i < 5; i++) {
  let playerSelection = prompt("Choice? (Rock/Paper/Scissors): ");
  let computerSelection = getComputerChoice()
  let result = playRound(playerSelection, computerSelection)
  if (result === 1) {
    score += 1
  } else {
    score -= 1
  }
  console.log(`Round ${i}: You ${CHOICES[result]}!`)
}
if (score > 0) {
  console.log(`You won!`)
} else if (score < 0) {
  console.log("You lost!")
} else {
  console.log("draw!")
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
