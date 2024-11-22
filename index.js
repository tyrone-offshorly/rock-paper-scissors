function getComputerChoice() {
  const randomNum = (Math.floor(Math.random() * 10) + 1) % 3;
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const input = prompt("Choose among the following: rock, paper, scissors");
  return input; 
}

function playRound(computerChoice, humanChoice) {
  if(humanChoice == "rock") {
    // code for rock here
    if(computerChoice == "paper") {
      return "lose"
    } else if (computerChoice == "scissors") {
      return "win"
    } else {
      return "tie"
    }
  } else if (humanChoice == "paper") {
    // code for paper here
    if(computerChoice == "scissors") {
      return "lose"
    } else if (computerChoice == "rock") {
      return "win"
    } else {
      return "tie"
    }
  } else if (humanChoice == "scissors") {
    // code for scissors here
    if(computerChoice == "rock") {
      return "lose"
    } else if (computerChoice == "paper") {
      return "win"
    } else {
      return "tie"
    }
  }
}

// main
const rpsChoice = document.querySelector("#playerChoice");
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
rpsChoice.addEventListener("click", (event) => {
  let target = event.target;
  if (rpsChoice.id !== target.id) {
    const computerChoice = getComputerChoice();
    const playerChoice = target.id;
    playerChoiceDisplay.textContent = `Choice: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Choice: ${computerChoice}`;
    const result = playRound(computerChoice, playerChoice);
    switch (result) {
      case 'lose':
        computerScore.textContent = Number(computerScore.textContent) + 1;
        break;
      case 'tie':
        playerScore.textContent = Number(playerScore.textContent) + 1;
        computerScore.textContent = Number(computerScore.textContent) + 1;
        break;
      case 'win':
        playerScore.textContent = Number(playerScore.textContent) + 1;
        break;
    }
    
    if(Number(playerScore.textContent) === 5 ||Number(computerScore.textContent) === 5) {
      setTimeout(() => {
        if(Number(playerScore.textContent) > Number(computerScore.textContent)) {
          alert("Player Wins!");
        }else if(Number(playerScore.textContent) < Number(computerScore.textContent)) {
          alert("Computer Wins!");
        } else {
          alert("It's a tie");
        }
      }, 0);
    }
    
  }
  
});
