'use strict';
console.log('app file is connected!');
//              method()
let userName = prompt('What is your name?');

let videoGames = prompt(
  'Do I sometimes play video games in my free time? Please answer yes or no!'
);

let gamelowerCase = videoGames.toLowerCase();

if (gamelowerCase === 'yes' || gamelowerCase === 'y') {
  alert('Your right! Video games help me relax!');
} else {
  alert('Wrong answer! I do play video games in my spare time');
}

let sportsAnswer = prompt(
  'Did I play sports in College? Please answer yes or no!'
);

let sportlowerCase = sportsAnswer.toLowerCase();
//if(conditions)
if (sportlowerCase === 'yes' || sportlowerCase === 'y') {
  alert('Correct! Played Rugby at SMC!');
} else {
  alert('Incorrect! Sports was a vital part of my college experience');
}

let countryAnswer = prompt(
  'Have I lived outside the U.S.A? Please answer yes or no!'
);

let irelandlowerCase = countryAnswer.toLowerCase();

if (irelandlowerCase === 'yes' || irelandlowerCase === 'y') {
  alert('Your right! I lived in Ireland for 4 years!');
} else {
  alert('Sorry, you are wrong!');
}

let dessertAnswer = prompt(
  'Is Cake my favorite dessert? Please answer yes or no!'
);

let dessertlowerCase = dessertAnswer.toLowerCase();

if (dessertlowerCase === 'yes' || dessertlowerCase === 'y') {
  alert('You are unfortunately Wrong! Cookies would be number 1!');
} else {
  alert(
    'Right answer! Homemade Cookies are my favorite, but cant is a close second!'
  );
}

let favSports = prompt(
  'Is Football my favorite Sport? Please answer yes or no!'
);

let favlowerCase = favSports.toLowerCase();

if (favlowerCase === 'yes' || favlowerCase === 'y') {
  alert('Nope! That would be Rugby, I played it!');
} else {
  alert('You are right! Rugby to be is the most entertaining sport!');
}


alert('Thanks for playing the game ' + userName);
