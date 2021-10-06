'use strict';

const firstScore = document.getElementById('score--0');
const secondScore = document.getElementById('score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const current1 = document.getElementById('current--0');

const current2 = document.getElementById('current--1');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const newButton = document.querySelector('.btn--new');
//Gamelogic:
// donig

firstScore.textContent = 0;
secondScore.textContent = 0;
dice.classList.toggle('hidden');
let scores = [0, 0];
let currentScore = 0;
let activeScore = 0;
let win = true;
const checkFunction = function () {
  document.getElementById(`current--${activeScore}`).textContent = 0;

  activeScore = activeScore === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

roll.addEventListener('click', function () {
  if (win) {
    const randomN = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');

    dice.src = `dice-${randomN}.png`;
    if (randomN !== 1) {
      currentScore += randomN;

      document.getElementById(`current--${activeScore}`).textContent =
        currentScore;
    } else {
      checkFunction();
    }
  }
});
hold.addEventListener('click', function () {
  if (win) {
    scores[activeScore] += currentScore;
    document.getElementById(`score--${activeScore}`).textContent =
      scores[activeScore];

    if (scores[activeScore] >= 30) {
      win = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activeScore}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeScore}`)
        .classList.remove('player--active');
    } else {
      checkFunction();
    }
  }
});

newButton.addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  activeScore = 0;
  win = true;
  firstScore.textContent = 0;
  secondScore.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  dice.classList.add('hidden');

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
});
