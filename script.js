// Constants and Variables
const playBtn = document.querySelector('.intro button');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
// const rockOptionBtn = document.querySelector('rock');
// const paperOptionBtn = document.querySelector('paper');
// const sissorsOptionBtn = document.querySelector('sissors');
const buttonOptions = document.querySelectorAll('.options button');

let playerScoreDisplay = document.querySelector('.player-score p').textContent;
let computerScoreDisplay = document.querySelector('.computer-score p').textContent;

let playingGame = false;
let playersTurn = false
let roundNum = 0;


// Functions


//Event Listeners 
// playBtn.addEventListener('click', playGame);
buttonOptions.array.forEach(button => {
  console.log(button.className);
});

