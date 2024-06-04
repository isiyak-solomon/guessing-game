"use-strict"


let secretNumber = Math.trunc(Math.random() * 20) + 1 ;
let score = 10;
let highScore = 0;

// Checking the entered number
document.querySelector('.Guess').addEventListener('click', function() {
     const numGuessed = Number(document.querySelector('.guess').value);
     if (!numGuessed) {
          document.querySelector('.message').textContent = '🛑 No Number Guessed!';
     } else if (numGuessed === secretNumber) {
          document.querySelector('.message').textContent = '🎉 Number Correct!';
          document.querySelector('.secret-number').textContent = secretNumber;

          // Adding Style to contents
          document.querySelector('.game-container').style.backgroundColor = '#90ee90';

          // High Score Implementation
          if (score > highScore) {
               highScore = score;
               document.querySelector('.high-score').textContent = highScore;
          }
     } else if (numGuessed > secretNumber) {
          if (score > 0 ) {
               document.querySelector('.message').textContent = '🔺 Too High Number!';
               score--;
               document.querySelector('.lifetime').textContent = score;
          } else {
               // Styling Background color of the container
               document.querySelector('.game-container').style.backgroundColor = '#f36b6b';
               document.querySelector('.guess').style.borderColor = '#fff';
               document.querySelector('.message').style.backgroundColor = '#ff0000';
               document.querySelector('.message').style.color = '#fff';
               document.querySelector('.message').style.width = '200px';
               document.querySelector('.message').style.padding = '10px 20px';
               document.querySelector('.message').style.borderRadius = '5px';
               document.querySelector('.message').style.border = '2px solid #fff';
               document.querySelector('.message').textContent = "💥 Game Over!";
               document.querySelector('.score').textContent = 0;
          }
     } else if (numGuessed < secretNumber) {
          if (score > 0 ) {
               document.querySelector('.message').textContent = '🔻 Too Low Number!';
               score--;
               document.querySelector('.lifetime').textContent = score;
          } else {
               // Styling Background color of the container
               document.querySelector('.game-container').style.backgroundColor = '#f36b6b';
               document.querySelector('.guess').style.borderColor = '#fff';
               document.querySelector('.message').style.backgroundColor = '#ff0000';
               document.querySelector('.message').style.color = '#fff';
               document.querySelector('.message').style.width = '200px';
               document.querySelector('.message').style.padding = '10px 20px';
               document.querySelector('.message').style.borderRadius = '5px';
               document.querySelector('.message').style.border = '2px solid #fff';
               document.querySelector('.message').textContent = "💥 Game Over!";
               document.querySelector('.score').textContent = 0;
          }
     }
})

// Player Switching Button (Again! 
document.querySelector('.Again').addEventListener('click', function() {
     score = 10;
     secretNumber = Math.trunc(Math.random() * 20) + 1 ;
     document.querySelector('.secret-number').textContent = "?";
     document.querySelector('.message').textContent = "Starting to Guess....";
     document.querySelector('.lifetime').textContent = score;
     document.querySelector('.high-score').textContent = highScore;
     document.querySelector('.guess').value = '';

     // Adding Style to contents
     document.querySelector('.game-container').style.backgroundColor = '#fff';
     document.querySelector('.guess').style.borderColor = '#000';
     document.querySelector('.message').style.backgroundColor = '#fff';
     document.querySelector('.message').style.color = '#000';
     document.querySelector('.message').style.width = 'unset';
     document.querySelector('.message').style.padding = '0';
})

// Resetting Game High Score 
document.querySelector('.Reset').addEventListener('click', function() {
     const secretNumber = Math.trunc(Math.random() * 20) + 1 ;
     score = 10;
     document.querySelector('.message').textContent = "Starting to Guess....";
     document.querySelector('.lifetime').textContent = score;
     document.querySelector('.guess').value = '';
     document.querySelector('.high-score').textContent = 0;
     document.querySelector('.message').style.backgroundColor = '#fff';
     document.querySelector('.secret-number').textContent = "?";
})