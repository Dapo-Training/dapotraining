//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
let answer;
let year= 2020;
if (year%4==1) {
    answer = ' is not a leap year';
} else {
    answer = ' is a leap year';    
}
console.log('The Year '+year+answer)