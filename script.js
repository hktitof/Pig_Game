'use strict';
//variables
const arrayImages = {
  1: 'dice-1.png',
  2: 'dice-2.png',
  3: 'dice-3.png',
  4: 'dice-4.png',
  5: 'dice-5.png',
  6: 'dice-6.png',
};

//general declaration

let playerTurn_true_pl1_false_pl2 = true;

//playhers selection area
const player1Area = document.querySelectorAll('.player')[0];
const player2Area = document.querySelectorAll('.player')[1];

//buttons declaration
const getNewGame = document.querySelector('.btn--new');
const getRollDice = document.querySelector('.btn--roll');
const getHold = document.querySelector('.btn--hold');

//get total score general element
const scoretotal = document.querySelectorAll('.score');
const scorecurrent = document.querySelectorAll('.current-score');
//players 1 declaration
let player1_current = scorecurrent[0];
let player1_total = scoretotal[0];

//player 2 decalation
let player2_current = scorecurrent[1];
let player2_total = scoretotal[1];

//setting players values to zero
player1_current.textContent = '0';
player1_total.textContent = '0';
player2_current.textContent = '0';
player2_total.textContent = '0';

//declaring and setting up variables of the games
let var_player1_current = 0;
let var_player1_total = 0;
let var_player2_current = 0;
let var_player2_total = 0;

//setting variables visually automatically after calling this function
const setVariables = () => {
  player1_current.textContent = var_player1_current;
  player1_total.textContent = var_player1_total;
  player2_current.textContent = var_player2_current;
  player2_total.textContent = var_player2_total;
};

//image selector
const dice = document.querySelector('.dice');
const setImageDice = value => {
  dice.setAttribute('src', value);
};

//hide image when starting the game
dice.classList.add('hide');

//set player Turn
const changePolayerTurnAndInitialCurrentScore = () => {
  if (playerTurn_true_pl1_false_pl2) {
    var_player1_current = 0;
    playerTurn_true_pl1_false_pl2 = false;
    player1Area.classList.remove('player--active');
    player2Area.classList.add('player--active');
    setVariables();
  } else {
    var_player2_current = 0;
    playerTurn_true_pl1_false_pl2 = true;
    player2Area.classList.remove('player--active');
    player1Area.classList.add('player--active');
    setVariables();
  }
};

//Rolle dice function will return a number and change image
const RolleDice = () => {
  let random = Math.floor(Math.random() * 6) + 1;
  switch (random) {
    case 1:
      console.log("it's 1");
      setImageDice(arrayImages[1]);
      break;
    case 2:
      console.log("it's 2");
      setImageDice(arrayImages[2]);
      break;
    case 3:
      console.log("it's 3");
      setImageDice(arrayImages[3]);

      break;
    case 4:
      console.log("it's 4");
      setImageDice(arrayImages[4]);
      break;
    case 5:
      console.log("it's 5");
      setImageDice(arrayImages[5]);
      break;
    case 6:
      console.log("it's 6");
      setImageDice(arrayImages[6]);
      break;
  }
  if (random == 1) {
    changePolayerTurnAndInitialCurrentScore();
  } else {
    if (playerTurn_true_pl1_false_pl2) {
      var_player1_current = var_player1_current + random;
      setVariables();
    } else {
      var_player2_current = var_player2_current + random;
      setVariables();
    }
  }
};

//reset Game
const resetGame = () => {
  var_player1_current = 0;
  var_player1_total = 0;
  var_player2_current = 0;
  var_player2_total = 0;
  playerTurn_true_pl1_false_pl2 = true;
  if (player2Area.classList.contains('player--active')) {
    player2Area.classList.remove('player--active');
    player1Area.classList.add('player--active');
  }
  setVariables();
  if (!dice.classList.contains('hide')) {
    dice.classList.add('hide');
  }
};

//Event Listener
getNewGame.addEventListener('click', () => {
  resetGame();
});
getRollDice.addEventListener('click', () => {
  console.log('clicked on RollDice');
  dice.classList.remove('hide');
  RolleDice();
});
getHold.addEventListener('click', () => {
  if (playerTurn_true_pl1_false_pl2) {
    var_player1_total = var_player1_total + var_player1_current;
    var_player1_current = 0;
    playerTurn_true_pl1_false_pl2 = false;
    setVariables();
    player1Area.classList.remove('player--active');
    player2Area.classList.add('player--active');
  } else {
    var_player2_total = var_player2_total + var_player2_current;
    var_player2_current = 0;
    setVariables();
    playerTurn_true_pl1_false_pl2 = true;
    player2Area.classList.remove('player--active');
    player1Area.classList.add('player--active');
  }
});

//Roll Dice
const rollDice = () => {};

//Setup first type function
const setup = () => {
  // dice.classList.add("hide");
  console.log('setup');
};

//call setup Function
setup();
