'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number!";
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent=25;
//
// document.querySelector('.guess').value = 11;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20+1)
console.log(secretNumber);

document.querySelector('.check').addEventListener
  ('click',function () {

    const presentScore = Number(document.querySelector('.score').textContent);
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
      document.querySelector('.message').textContent = "No Number!";
    }
    else if (secretNumber === guess){
      document.querySelector('.message').textContent = "Correct Number!";
      document.querySelector('.highscore').textContent = presentScore;
      document.querySelector('.number').textContent = secretNumber;
    }
    else if (secretNumber<guess) {
      if (presentScore>0) {
        document.querySelector('.message').textContent = "Guess number is too high!";
        document.querySelector('.score').textContent = presentScore - 1;
      }
      else {
        document.querySelector('.message').textContent = "loose!";
      }
    }
    else if (secretNumber>guess){
      if (presentScore>0){
      document.querySelector('.message').textContent = "Guess Number is Too Low!";
      document.querySelector('.score').textContent = presentScore - 1;
    }
    else {
        document.querySelector('.message').textContent = "loose!";
      }
    }

  })

