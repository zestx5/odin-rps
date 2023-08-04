function getComputerChoice() {
    // Randomly return rock, paper or scissors
    const choice = ['rock','paper','scissors'];
    // Get integer 0..2
    const index = Math.floor(Math.random() * 3);

    return choice[index];
}