function getComputerChoice() {
  let randomNum = (Math.floor(Math.random() * 10) + 1) % 3;
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
