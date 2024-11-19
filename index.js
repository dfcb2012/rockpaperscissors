let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const scoreDiv = document.getElementById("score");
const resultDiv = document.createElement("div");
const buttons = document.querySelectorAll("button");
resultDiv.id = "result";
scoreDiv.appendChild(resultDiv);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML.toLocaleLowerCase() === "reset") {
      resetGame();
    } else {
      let humanSelection = btn.innerHTML.toLowerCase();
      let computerSelection = getComputerChoice(choices);
      console.log(computerSelection);
      playRound(humanSelection, computerSelection);
    }
  });
});

function getComputerChoice(arr) {
  let computerChoice = arr[Math.floor(Math.random() * arr.length)];
  console.log(`Computer choice is: ${computerChoice}`);
  return computerChoice;
}

function updateScore() {
  document.getElementById(
    "player-score"
  ).textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
}

function updateRoundResult(message) {
  resultDiv.textContent = message;
}

function theWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "Human" : "Computer";
    resultDiv.textContent = `Congrats, ${winner} Won the Game!`;
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    updateRoundResult("Draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    updateRoundResult(
      `You won this round. ${humanChoice} beats ${computerChoice}!`
    );
  } else {
    computerScore++;
    updateRoundResult(
      `Computer won this round, ${computerChoice} beats ${humanChoice}!`
    );
  }
  updateScore();
  theWinner();
}

updateScore();

// function playGame() {
//   for (let rounds = 1; rounds <= 5; rounds++) {
//     let computerSelection = getComputerChoice(choices);
//     let humanSelection = getHumanChoice();
//     let result = playRound(humanSelection, computerSelection);
//     console.log(`Round ${rounds}: ${result}`);
//     if (result === "Human wins!") {
//       humanScore++;
//       if (humanScore > 2) break;
//     } else {
//       computerScore++;
//       if (computerScore > 2) break;
//     }
//   }
//   console.log(
//     `\nFinal Score: Human - ${humanScore} x ${computerScore} - Computer`
//   );
//   if (humanScore > computerScore) {
//     console.log("Congrats! You won the game!");
//   } else console.log("Computer won the game!");
// }

// playGame();
