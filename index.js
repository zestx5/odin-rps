function getComputerChoice() {
  // Randomly return rock, paper or scissors
  const choice = ["rock", "paper", "scissors"];
  // Get integer 0..2
  const index = Math.floor(Math.random() * 3);

  return choice[index];
}

function playSingleRound(playerSelection, computerSelection) {
  // make players choice case insensitive
  let playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie !";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You Win! ${playerSelection.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    )} beats ${computerSelection.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    )}`;
  }
  return `You Lose! ${computerSelection.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  )} beats ${playerSelection.replace(/\b\w/g, (char) => char.toUpperCase())}`;
}
