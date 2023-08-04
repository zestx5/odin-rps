function getComputerChoice() {
  // Randomly return rock, paper or scissors
  const choice = ["rock", "paper", "scissors"];
  // Get integer 0..2
  const index = Math.floor(Math.random() * 3);

  return choice[index];
}

function playSingleRound(playerSelection, computerSelection) {
  // make players choice case insensitive
  playerSelection = playerSelection.toLowerCase();

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

function game() {
  let playerSelection = "";
  do {
    playerSelection = prompt("Enter Rock/Paper/Scissors").toLowerCase();
  } while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  );

  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    if (i > 0) {
      playerSelection = prompt("Enter Rock/Paper/Scissors");
    }
    const result = playSingleRound(playerSelection, getComputerChoice());
    console.log(result);
    if (result.substring(4, 7) === "Win") {
      player++;
    } else if (result.substring(4, 7) === "Los") {
      computer++;
    }
  }

  if (player === computer) {
    console.log("Tie!");
  }

  if (player > computer) {
    console.log(`You win, final score ${player}:${computer}`);
  } else {
    console.log(`You lose, final score ${player}:${computer}`);
  }
}

game();
