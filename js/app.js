'use strict';
console.log('app file is connected!');
let userAnswer = prompt('Do I sometimes play video games in my free time? Please answer yes or no!');
console.log('🚀 ~ file: app.js:16 ~ userAnswer:', userAnswer);

let lowerCaseInput = userAnswer.toLowerCase();
console.log('🚀 ~ file: app.js:20 ~ lowerCaseInput:', lowerCaseInput);

if (lowerCaseInput === 'yes' || lowerCaseInput === 'y') {
  alert('Your right! Video games help me relax!');
} else {
  alert('Wrong answer! I do play video games in my spare time');
}
