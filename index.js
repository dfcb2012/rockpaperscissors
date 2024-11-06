let choices = ["rock", "paper", "scissors"];

function getComputerChoice(arr) {
  let computerChoice = arr[Math.floor(Math.random() * arr.length)];
  console.log(`Computer choice is: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Qual é a escolha? ").toLowerCase();
  console.log(`Human choice is: ${humanChoice}`);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Draw";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Human wins!";
  } else return "Computer wins!";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let rounds = 1; rounds <= 5; rounds++) {
    let computerSelection = getComputerChoice(choices);
    let humanSelection = getHumanChoice();
    let result = playRound(humanSelection, computerSelection);
    console.log(`Round ${rounds}: ${result}`);
    if (result === "Human wins!") {
      humanScore++;
      if (humanScore > 2) break;
    } else {
      computerScore++;
      if (computerScore > 2) break;
    }
  }
  console.log(
    `\nFinal Score: Human - ${humanScore} x ${computerScore} - Computer`
  );
  if (humanScore > computerScore) {
    console.log("Congrats! You won the game!");
  } else console.log("Computer won the game!");
}

playGame();
