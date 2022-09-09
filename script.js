'use strict';
// Rewriting Code

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

// Variables
let playing, scores, activePlayer, currentScore;

// Functions to make code DRY
const initialize = () => {
  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
initialize();

const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const hideDice = () => {
  diceEl.classList.add('hidden');
};

// Rolling The Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.  Generating Random Dice Roll
    const dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.  Check if rolled dice is 1;
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // if true; switch to next player
      switchPlayer();
    }
  }
});

// Holding The Dice
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle(`player--winner`);
      // diceEl.classList.add('hidden');
      hideDice();
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// New Game
btnNew.addEventListener('click', initialize);

// Old Code

// // Selecting Elements
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current0El = document.querySelector('#current--0');
// const current1El = document.querySelector('#current--1');
// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');

// let scores, currentScore, activePlayer, playing;

// // functions
// const init = () => {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current1El.textContent = 0;
//   current0El.textContent = 0;
//   diceEl.classList.add('hidden');
//   player0.classList.remove('player--winner');
//   player1.classList.remove('player--winner');
//   player0.classList.add('player--active');
//   player1.classList.remove('player--active');
// };
// init();

// const switchPlayer = () => {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0.classList.toggle('player--active');
//   player1.classList.toggle('player--active');
// };

// // Rolling Dice Functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // Generating Random dice roll
//     const dice = Math.ceil(Math.random() * 6);

//     // Display Dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;
//     console.log(dice);

//     // Check if 1 is rolled ; if true switch to next player
//     if (dice !== 1) {
//       //Add  dice to current score
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//       //current0El.textContent = currentScore; Change later
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // Add currentScore to activePlayer score
//     scores[activePlayer] += currentScore;
//     console.log(scores[activePlayer]);

// document.getElementById(`score--${activePlayer}`).textContent =
//   scores[activePlayer];
//     // Check if score is 100
//     // if true, Game has been won
//     if (scores[activePlayer] >= 20) {
//       diceEl.classList.add('hidden');
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.toggle('player--winner');
//     } else {
//       // else switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);
