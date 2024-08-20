const botchoiceview = document.getElementById("bot_choice");
const playerchoiceview = document.getElementById("player_choice");
const resultview = document.getElementById("result");
const scoreview = document.getElementById("score");
const finalResultView = document.getElementById("final_result");
const remainingView = document.getElementById("remaining");

const possiblechoices = document.querySelectorAll('button');

let playerScore = 0;
let botScore = 0;
let roundsPlayed = 0;
const maxRounds = 10;

possiblechoices.forEach(button => button.addEventListener('click', (e) => {
    if (roundsPlayed < maxRounds) {
        const userchoice = e.target.id;
        playerchoiceview.innerHTML = userchoice;
        botchoicegenerator();
        results(userchoice);
        updateScore();
        roundsPlayed++;
        updateRemainingRounds();

        // Show final result only after 10 rounds
        if (roundsPlayed === maxRounds) {
            showFinalResult();
        }
    }
}));

function botchoicegenerator() {
    const RandomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (RandomNumber === 1) {
        botchoosen = "Rock";
    } else if (RandomNumber === 2) {
        botchoosen = "Paper";
    } else {
        botchoosen = "Scissor";
    }

    botchoiceview.innerHTML = botchoosen;
}

function results(userchoice) {
    let result;
    if (botchoosen === userchoice) {
        result = "Hey, it's a draw!";
    } else if (
        (botchoosen === "Rock" && userchoice === "Paper") ||
        (botchoosen === "Paper" && userchoice === "Scissor") ||
        (botchoosen === "Scissor" && userchoice === "Rock")
    ) {
        result = "Congrats! You won!";
        playerScore++;
    } else {
        result = "Opponent wins!";
        botScore++;
    }
    resultview.innerHTML = result;
}

function updateScore() {
    scoreview.innerHTML = `Player: ${playerScore} - Opponent: ${botScore}`;
}

function updateRemainingRounds() {
    remainingView.innerHTML = `Remaining Rounds: ${maxRounds - roundsPlayed}`;
}

function showFinalResult() {
    let finalResult;
    if (playerScore > botScore) {
        finalResult = "Congratulations! You won the game!";
    } else if (botScore > playerScore) {
        finalResult = "Game over! Opponent won the game!";
    } else {
        finalResult = "It's a tie after 10 rounds!";
    }
    finalResultView.innerHTML = finalResult;
}
