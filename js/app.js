'use strict';
console.log('app file is connected!');
let userPoints = 0;
console.log('points?', userPoints);

alert('Hello Welcome to the Guessing Game by Tim');

function getUserName(){
  let userName = prompt('What is your name?');
  console.log('user name is: ', userName);
  alert('Welcome ' + userName);
}

getUserName();


let videoGames = prompt('Do I sometimes play video games in my free time? Please answer yes or no!');

let gamelowerCase = videoGames.toLowerCase();

if (gamelowerCase === 'yes' || gamelowerCase === 'y') {
  alert('Your right! Video games help me relax!');
  userPoints = userPoints + 1;
} else {
  alert('Wrong answer! I do play video games in my spare time');
}

let sportsAnswer = prompt('Did I play sports in College? Please answer yes or no!');

let sportlowerCase = sportsAnswer.toLowerCase();

if (sportlowerCase === 'yes' || sportlowerCase === 'y') {
  alert('Correct! Played Rugby at SMC!');
  userPoints = userPoints + 1;
} else {
  alert('Incorrect! Sports was a vital part of my college experience');
}

let countryAnswer = prompt('Have I lived outside the U.S.A? Please answer yes or no!');

let irelandlowerCase = countryAnswer.toLowerCase();
if (irelandlowerCase === 'yes' || irelandlowerCase === 'y') {
  alert('Your right! I lived in Ireland for 4 years!');
  userPoints = userPoints + 1;
} else {
  alert('Sorry, you are wrong!');
}

let dessertAnswer = prompt('Is Cake my favorite dessert? Please answer yes or no!');

let dessertlowerCase = dessertAnswer.toLowerCase();

if (dessertlowerCase === 'yes' || dessertlowerCase === 'y') {
  alert('You are unfortunately Wrong! Cookies would be number 1!');
} else {
  alert('Right answer! Homemade Cookies are my favorite, but cake is a close second!');
  userPoints = userPoints + 1;
}

let favSports = prompt('Is Football my favorite Sport? Please answer yes or no!');

let favlowerCase = favSports.toLowerCase();

if (favlowerCase === 'yes' || favlowerCase === 'y') {
  alert('Nope! That would be Rugby, I played it!');
} else {
  alert('You are right! Rugby to be is the most entertaining sport!');
  userPoints = userPoints + 1;
}

let rightNumber = 8;
let attempts = 0;
while (attempts < 4) {
  attempts = attempts + 1;
  let guessNumber = parseInt(prompt('Guess a number, 1-10! You get four tries.'));
  if (guessNumber <= 7) {
    alert('Too low, guess again!');
  } else if (guessNumber >= 9) {
    alert('Too high, guess again!');
  } if (guessNumber === rightNumber) {
    alert('You guessed the correct number, ' + guessNumber + '! Great work!');
    userPoints = userPoints + 1;
    break;
    // } if (guessNumber === wrongNumber) {
  }

}
alert('Dang! The right answer is 8.');

let countriesVisited = ['ireland', 'england', 'egypt', 'germany', 'australia', 'new zealand', 'scotland', 'italy', 'france', 'romania', 'brazil', 'argentina', 'uruguay', 'israel', 'japan'];
let userAttempts = 0;
let correctAnswer = 0;

while (userAttempts < 6) {
  let userAnswer = prompt('What countries in the world have I visited');
  let normalizedInput = userAnswer.toLowerCase().trim();

  if (countriesVisited.indexOf(normalizedInput) >= 0) {
    alert('Yes!' + userAnswer + ' is a country I lived in.');
    correctAnswer++;
  } else {
    alert('Wrong Answer');
  }
  userAttempts = userAttempts + 1;
  console.log('attempts', userAttempts);


}

alert('You answered ' + correctAnswer + 'out of 6');
alert('All the countries I visited are:' + countriesVisited.join(', '));
alert('Thanks for playing my game ' + userName);


let results = document.getElementById('results');
console.log(results);
let finalresults = 'You guessed' + userAttempts + ' and got' + correctAnswer + ' correct answers.';
results.innerHTML= finalresults;
