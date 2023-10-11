const choices = ["Rock", "Paper", "Scissors"];

// Function to generate random number
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomChoice() {
    const randomIndex = randomNumber(0, 2);
    // console.log(randomIndex);
    const randomChoice = choices[randomIndex];
    // console.log(randomChoice);
    return randomChoice;
}

function playRound(computerSelection, playerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    // Tie case
    if (computerSelection === playerSelection) {
        console.log("It's a tie.")
        return "tie";
    }
    // Rock wins
    if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("--- You Lose! Rock beats Scissors ---")
        return "computer";
    }
    if (computerSelection === "scissors" && playerSelection === "rock") {
        console.log("--- You Win! Rock beats Scissors ---")
        return "player";
    }
    // Paper wins
    if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("--- You Lose! Paper beats Rock ---")
        return "computer";
    }
    if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("--- You Win! Paper beats Rock ---")
        return "player";
    }
    // Scissors win
    if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("--- You Lose! Scissors beats Paper ---")
        return "computer";
    }
    if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("--- You Win! Scissors beats Paper ---")
        return "player";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = getRandomChoice();
        let computerSelection = getRandomChoice();

        winner = playRound(computerSelection, playerSelection);
        if (winner === "player") {
            playerScore++;
        } else if (winner == "computer") {
            computerScore++;
        } else {
            continue;
        }
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("--- You Win! Congratulations!!! ---");
    } else {
        console.log("--- You Lose! Better luck next time ---");
    }
}

game();