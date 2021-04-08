// Constants and Variables
const playBtn = document.querySelector('.intro button');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const buttonOptions = document.querySelectorAll('.options button');
const RandomOptions = ['rock', 'paper', 'sissors'];

let playerScoreDisplay = document.querySelector('.player-score p').textContent;
let computerScoreDisplay = document.querySelector('.computer-score p').textContent;

let playingGame = false;
let playersTurn = false
let roundNum = 0;


// Functions

const generateRandomOption = ()=>{
const option = RandomOptions[Math.floor(Math.random()*3)];
return option;
}

const selectHandOption = ()=>{

}

const playGame = ()=>{

}

//Event Listeners 
playBtn.addEventListener('click', playGame);
buttonOptions.forEach((button) => {
  // console.log(button.className);
  button.addEventListener('click', ()=> selectHandOption(button.className));;
});

