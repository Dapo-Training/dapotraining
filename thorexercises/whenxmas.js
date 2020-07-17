//Write a JavaScript program to calculate days left until next Christmas. 

let today = new Date;
console.log(today);
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
//The next two commented lines are for test purposes
//let month = 11;
//let day = 28;
//let currentdate = new Date(year,month,day);
//console.log(year);
//console.log(month);
//console.log(day);
//console.log(currentdate);
let xmasyear;

if (month < 11) {
    xmasyear = year;
} else if (day < 25) {
    xmasyear = year;
} else {
    xmasyear = year + 1;
}

//console.log(xmasyear);
let xmasday = new Date(xmasyear, 11, 25);
console.log(xmasday);

//time remaining is todays date taken from the next xmas
let timeleft = xmasday - today;
//let secondsleft = timeleft/1000;
//let hoursleft = secondsleft/3600;
let daysleft = timeleft/(24*60*60*1000);
let absdays = Math.ceil(daysleft);
//console.log(timeleft);
//console.log(daysleft);
console.log(absdays);