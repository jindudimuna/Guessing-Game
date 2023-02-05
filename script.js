'use strict';

//initalize score, highscore and random number
let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 21) + 1;

//create a function to check the guess on click of the check button
const check = function () {
  const guess = Number(document.querySelector('.guess').value);

  //check if guess is empty
  if (!guess) {
    document.querySelector('.message').textContent =
      "hmm can't see that number";
    //check if guess is correct
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#789D34';
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('.number').textContent = number;
    score++;
    document.querySelector('.check').disabled = true;
    document.querySelector('.score').textContent = score;
    //check if theres a new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //check if guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game  ';
      document.querySelector('.score').textContent = 0;
    }
  }
};

//create function to reset the game
const reset = function () {
  // document.location.reload();
  score = 20;
  number = Math.trunc(Math.random() * 21) + 1;
  // document.querySelector('.number').textContent = number;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').disabled = false;
  // document.querySelector('guess').textContent = '';
};
document.querySelector('.again').addEventListener('click', reset);
document.querySelector('.check').addEventListener('click', check);
