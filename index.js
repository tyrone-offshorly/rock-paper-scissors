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
      console.log("You lost!");
      return "lose"
    } else if (computerChoice == "scissors") {
      console.log("You Won!");
      return "win"
    } else {
      console.log("It's a tie!");
      return "tie"
    }
  } else if (humanChoice == "paper") {
    // code for paper here
    if(computerChoice == "scissors") {
      console.log("You lost!");
      return "lose"
    } else if (computerChoice == "rock") {
      console.log("You Won!");
      return "win"
    } else {
      console.log("It's a tie!");
      return "tie"
    }
  } else if (humanChoice == "scissors") {
    // code for scissors here
    if(computerChoice == "rock") {
      console.log("You lost!");
      return "lose"
    } else if (computerChoice == "paper") {
      console.log("You Won!");
      return "win"
    } else {
      console.log("It's a tie!");
      return "tie"
    }
  }
}

function playGame() {
  
  let playerScore = 0;
  let computerScore = 0;
  for(let i = 0; i < 5; i++) {
    const result = playRound(getComputerChoice(), getHumanChoice())
    switch (result) {
      case "win":
        playerScore++;
        break;
      case "lose":
        computerScore++;
        break;
      case "tie":
        playerScore++;
        computerScore++;
    }
    console.log(`Your score is ${playerScore}`)
    console.log(`Computer score is ${computerScore}`)
  }
  if(playerScore > computerScore) {
    return "Player wins"
  } else if(computerScore > playerScore) {
    return "Computer wins"
  } else {
    return "It's a tie"
  }
}

