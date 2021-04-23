// Constants and Variables
const playBtn = document.querySelector(".intro button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const buttonOptions = document.querySelectorAll(".options button");

let playerScoreDisplay = document.querySelector(".player-score p");
let computerScoreDisplay = document.querySelector(".computer-score p");
let winnerMessage = document.querySelector(".winner");
let playerScore = 0;
let computerScore = 0;

let playingGame = false;
let playerWins = "";
let roundNum = 0;

// Functions
const whoWinsRound = (playersHand, computersHand) => {
  let winnerText = "";
  if (playersHand === computersHand) {
    return (winnerText = "Tie!");
  } else if (playersHand === "rock") {
    if (computersHand === "paper") {
      computerScore++;
       winnerText = "Paper beats rock. Computer wins!";
    } else {
      playerScore++;
       winnerText = "Rock beats sissors. Player wins!";
    }
  } else if (playersHand === "paper") {
    if (computersHand === "sissors") {
      computerScore++;
       winnerText = "Sissors beats paper. Computer wins!";
    } else {
      playerScore++;
       winnerText = "Paper beats rock. Player wins!";
    }
  } else if (playersHand === "sissors") {
    if (computersHand === "rock") {
      computerScore++;
       winnerText = "Rock beats sissors. Computer wins!";
    } else {
      playerScore++;
      winnerText = "Sissors cuts paper. Player wins!";
    }
  }
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  winnerMessage.textContent = winnerText;
  console.log('PlayerScore: ', playerScore);
  console.log('computerScore: ', computerScore);
  console.log('computersHand: ',computersHand);
}

const changeHandDisplay = (whichPlayer, handOption) => {
  whichPlayer.src = `assets/${handOption}.png`;
  // console.log(whichPlayer);
};

const generateRandomOption = () => {
  const randomOptions = ["rock", "paper", "sissors"];
  const randomOption = randomOptions[Math.floor(Math.random() * 3)];
  return randomOption;
};

const playerPicks = (option) => {
  // console.log(option);
  changeHandDisplay(playerHand, option);
   computerPicks();
   whoWinsRound(option, computerPicks());
};

const computerPicks = () => {
  const computerSelection = generateRandomOption();
  changeHandDisplay(computerHand, computerSelection);
  return computerSelection;
};

const playGame = () => {
  playingGame = true;

  const intro = document.querySelector(".intro");
  winnerMessage.classList.add("fade-in");
  intro.classList.add("fade-out");

  if (playingGame === true) {
    buttonOptions.forEach((button) => {
      button.addEventListener("click", () => playerPicks(button.className));
    });
  }
  // Logic for winning round
};

//Event Listeners
playBtn.addEventListener("click", playGame);
