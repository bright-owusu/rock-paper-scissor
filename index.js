// generate a random number from 1 to 3
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get random choice based on random number generated
function getRandomChoice() {
    const randomIndex = randomNumber(0, 2);
    console.log(randomIndex);
    
    switch (randomIndex) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

// announce winner and return the winner
function announceWinner(playerChoice, computerChoice) {
    const winnerBoard = document.querySelector("#winner-board");
    // tie condition
    if (playerChoice === computerChoice) {
        winnerBoard.textContent = "It's a tie!";
        return "tie";
    }
    // player win condition
    if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        winnerBoard.textContent = "You Win!";
        return "player";
    }
    // computer win condition
    if (
        computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "paper" && playerChoice === "rock" ||
        computerChoice === "scissors" && playerChoice === "paper"
    ) {
        winnerBoard.textContent = "You Lose!";
        return "computer";
    }
}

// explain the reason for the outcome
function explainOutcome (winner, playerChoice, computerChoice) {
    const explanationBoard = document.querySelector("#explanation-board");

    if (winner === "tie") {
        explanationBoard.textContent = `${playerChoice} ties with ${computerChoice}`;
    }

    if (winner === "player") {
        explanationBoard.textContent = `${playerChoice} wins against ${computerChoice}`;
    }

    if (winner === "computer") {
        explanationBoard.textContent = `${playerChoice} loses to ${computerChoice}`;
    }
}

// display the choices
function updateChoice (playerChoice, computerChoice) {
    const playerChoiceImage = document.querySelector("#player-choice-image");
    const computerChoiceImage = document.querySelector("#computer-choice-image");

    playerChoiceImage.src = `images/sticker-${playerChoice}.png`;
    computerChoiceImage.src = `images/sticker-${computerChoice}.png`;
}

// update the scoreboard
function updateScore (winner) {
    const playerScoreBoard = document.querySelector("#player-score");
    let playerScore = parseInt(playerScoreBoard.textContent);

    const computerScoreBoard = document.querySelector("#computer-score");
    let computerScore = parseInt(computerScoreBoard.textContent);

    if (winner === "player") {
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }

    if (winner === "computer") {
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }
}

function handleClick (playerChoice) {
    let computerChoice = getRandomChoice();
    let winner = announceWinner(playerChoice, computerChoice);
    explainOutcome(winner, playerChoice, computerChoice);
    updateChoice(playerChoice, computerChoice);
    updateScore(winner);
}

// check if we have a winner for the round
function isWinConfirmed () {
    const playerScore = parseInt(document.querySelector("#player-score")
    .textContent);
    const computerScore = parseInt(document.querySelector("#computer-score").
    textContent)

    if (playerScore === 5 || computerScore === 5) {
        return true;
    } else {
        return false;
    }
}

// show modal to ask player to play again <<<< CONTINUE HERE <<<<
function replayGameModal () {
    // get player and computer scores
    const playerScore = parseInt(document.querySelector("#player-score")
    .textContent);
    const computerScore = parseInt(document.querySelector("#computer-score").
    textContent)
    // get modal element and set display to block
    const replayModal = document.querySelector("#replay-modal");
    // get win-or-lose div and set content
    const winOrLose = document.querySelector("#win-or-lose");

    if (playerScore > computerScore) {
        winOrLose.textContent = "You Win!";
    }
    if (computerScore > playerScore) {
        winOrLose.textContent = "You Lose!";
    }
    replayModal.style.display = "block";
}

// refresh the page on click of replay button
const replayButton = document.querySelector("#replay-button");
replayButton.addEventListener("click", (e) => {
    window.location.reload();
})

function playRound (playerChoice) {
    handleClick (playerChoice);
    // check if there is a winner for the round
    if (isWinConfirmed()) {
        replayGameModal();
    }
}

// click events for buttons
rockButton = document.querySelector("#btn-rock");
rockButton.addEventListener("click", (e) => playRound(e.target.id));

paperButton = document.querySelector("#btn-paper");
paperButton.addEventListener("click", (e) => playRound(e.target.id))

scissorsButton = document.querySelector("#btn-scissors");
scissorsButton.addEventListener("click", (e) => playRound(e.target.id))