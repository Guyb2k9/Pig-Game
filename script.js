'use strict';
let diceImage = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');

let playerSelect = document.querySelectorAll('.player');
let resetScore = document.querySelectorAll('.current-score');
let resetPoints = document.querySelectorAll('.score');

let total = 0;
let currPlayer = 0;
let currentScore = 0;
let scoreArray = [0, 0];

///////////////////////////////////////////////////////////////////////////////
rollDice.addEventListener('click', () => {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `dice-${randomNum}.png`;

  if (scoreArray[0] >= 100 || scoreArray[1] >= 100) {
    alert(`${currPlayer - 1} is the winner`);
  } else if (randomNum !== 1) {
    currentScore += randomNum;
    document.getElementById(`current--${currPlayer}`).innerHTML = currentScore;
  } else {
    swapPlayers();
  }
});

hold.addEventListener('click', () => {
  swapPlayers();
});

newGame.addEventListener('click', () => {
  reset();
});

////////////////////////////////////////////////////////////////////////////////

function swapPlayers() {
  document.getElementById(`current--${currPlayer}`).innerHTML = 0;
  document
    .querySelector(`.player--${currPlayer}`)
    .classList.remove('player--active');
  scoreArray[currPlayer] += currentScore;
  document.querySelector(`#score--${currPlayer}`).innerHTML =
    scoreArray[currPlayer];
  currPlayer = currPlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${currPlayer}`)
    .classList.add('player--active');
  currentScore = 0;
}

function reset() {
  currentScore = 0;
  scoreArray[0] = 0;
  scoreArray[1] = 0;
  for (const item of resetPoints) {
    item.innerHTML = 0;
  }
  for (const item of resetScore) {
    item.innerHTML = 0;
  }
  playerSelect[0].classList.add('player--active');
  playerSelect[1].classList.remove('player--active');
}
