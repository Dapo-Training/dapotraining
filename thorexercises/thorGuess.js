//Write a JavaScript program where the program takes a random integer between 1 to 10, 
//the user is then prompted to input a guess number. If the user input matches with guess number, 
//the program will display a message "Good Work" otherwise display a message "Not matched".

const prompt = require('prompt');
// This json object is used to configure what data will be retrieved from command line.
const prompt_attributes = [
  {
    // The fist input text is assigned to username variable.
    Name: 'guess',
    // dont hide the number
    hidden: false
  }
];
prompt.start();
// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
  if (err) {
      console.log(err);
      return 1;
  }else {
      console.log('Command-line received data:');
  }
  });
function getRandomInteger (min, max) {
  return Math.floor (Math.random() * (max - min) + min)+1;
}
const a = result.guess;
const b = getRandomInteger(1,10);
console.log(b);
if (a == b) {
    console.log ("Good Work! The random number WAS:" + b);
  } else {
    console.log ("Not Matched The random number was:" + b);
  };