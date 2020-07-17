/*Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Expected Output : 
60°C is 140 °F
45°F is 7.222222222222222°C */

function ctof (c) {
    return ((9*c)+160)/5
};

function ftoc (f) {
    return ((f-32)*5)/9
};
let celsius = 60;
let faren = 45;
let farenheit = ctof(celsius);
let centigrade = ftoc(faren);

console.log(celsius + '°C is ' + farenheit + '°F' );
console.log(faren + '°F is ' + centigrade + '°C');


