//Write a JavaScript program where the program takes a random integer between 1 to 10, 
//the user is then prompted to input a guess number. If the user input matches with guess number, 
//the program will display a message "Good Work" otherwise display a message "Not matched".


const prompts = require('prompts');
//const guess = prompt('Guess a number?');

(async () => {
  const guess = await prompts({
    type: 'number',
    name: 'answer',
    message: 'Pick a number between 1 and 10:',
    validate: value => value > 10 ? `Number must be less than 10` : true
  });
  function getRandomInteger (min, max) {
    return Math.floor (Math.random() * (max - min) + min)+1;
  }
  let a = guess.answer;
  let b = getRandomInteger(1,10);
  console.log(b);
  if (a == b) {
      console.log ("Good Work! The random number WAS:" + b);
    } else {
      console.log ("Not Matched The random number was:" + b);
    }
})();


