'use strict';
console.log('app file is connected!');

let userName = prompt('What is your name?');
console.log('user name is: ', userName);

let videoGames = prompt('Do I sometimes play video games in my free time? Please answer yes or no!');
console.log('🚀 ~ file: app.js:16 ~ userAnswer:', videoGames);

let gamelowerCase = videoGames.toLowerCase();
console.log('🚀 ~ file: app.js:20 ~ lowerCaseInput:', gamelowerCase);

if (gamelowerCase === 'yes' || gamelowerCase === 'y') {
  alert('Your right! Video games help me relax!');
} else {
  alert('Wrong answer! I do play video games in my spare time');
}

let sportsAnswer = prompt('Did I play sports in College? Please answer yes or no!');
console.log('🚀 ~ file: app.js:16 ~ userAnswer:', sportsAnswer);

let sportlowerCase = sportsAnswer.toLowerCase();
console.log('🚀 ~ file: app.js:20 ~ lowerCaseInput:', sportlowerCase);

if (sportlowerCase === 'yes' || sportlowerCase === 'y') {
  alert('Correct! Played Rugby at SMC!');
} else {
  alert('Incorrect! Sports was a vital part of my college experience');
}

let countryAnswer = prompt('Have I lived outside the U.S.A? Please answer yes or no!');
console.log('🚀 ~ file: app.js:16 ~ userAnswer:', countryAnswer);

let irelandlowerCase = countryAnswer.toLowerCase();
console.log('🚀 ~ file: app.js:20 ~ lowerCaseInput:', irelandlowerCase);

if (irelandlowerCase === 'yes' || irelandlowerCase === 'y') {
  alert('Your right! I lived in Ireland for 4 years!');
} else {
  alert('Sorry, you are wrong!');
}

let dessertAnswer = prompt('Is Cake my favorite dessert? Please answer yes or no!');
console.log('🚀 ~ file: app.js:16 ~ userAnswer:', dessertAnswer);

let dessertlowerCase = dessertAnswer.toLowerCase();
console.log('🚀 ~ file: app.js:20 ~ lowerCaseInput:', dessertlowerCase);

if (dessertlowerCase === 'yes' || dessertlowerCase === 'y') {
  alert('You are unfortunately Wrong! Cookies would be number 1!');
} else {
  alert('Right answer! Homemade Cookies are my favorite, but cant is a close second!');
}

let favSports = prompt('Is Football my favorite Sport? Please answer yes or no!');
console.log('🚀 ~ file: app.js:16 ~ userAnswer:', favSports);

let favlowerCase = favSports.toLowerCase();
console.log('🚀 ~ file: app.js:20 ~ lowerCaseInput:', favlowerCase);

if (favlowerCase === 'yes' || favlowerCase === 'y') {
  alert('Nope! That would be Rugby, I played it!');
} else {
  alert('You are right! Rugby to be is the most entertaining sport!');
}
