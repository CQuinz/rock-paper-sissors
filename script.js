// Constants and Variables
const playBtn = document.querySelector('.intro button');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');
const buttonOptions = document.querySelectorAll('.options button');
const RandomOptions = ['rock', 'paper', 'sissors'];

let playerScoreDisplay = document.querySelector('.player-score p').textContent;
let computerScoreDisplay = document.querySelector('.computer-score p').textContent;

let playingGame = false;
let playerWins = '';
let roundNum = 0;


// Functions

const changeHandDisplay = (whichPlayer, handOption)=>{
  whichPlayer.src = `assets/${handOption}.png`;
  console.log(whichPlayer);
}


const generateRandomOption = ()=>{
const randomOption = RandomOptions[Math.floor(Math.random()*3)];
return randomOption;
}

const playerPicks = (option)=>{
  console.log(option);
  changeHandDisplay(playerHand, option);
}

const computerPicks = ()=>{
  const computerSelection = generateRandomOption();
  changeHandDisplay(computerHand, computerSelection);
}

const playGame = ()=>{
  if(playingGame === !true){
    return;
    }else{
      //Event Listeners 
      playBtn.addEventListener('click', ()=>{
        playingGame = true;
        playGame();
      });

      buttonOptions.forEach((button) => {
        button.addEventListener('click', ()=> playerPicks(button.className));
      });


  }
}



