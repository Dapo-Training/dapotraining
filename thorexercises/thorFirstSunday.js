//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
let today = new Date("2014-01-01");
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let i=0;
let x;

do  {
    c = new Date(year + i, month, day);
    i++;
    x = c.getDay();
    }

while (x !=0);
console.log (c);
console.log (x);


 // do {
    // code block to be executed
  //}
 // while (condition);