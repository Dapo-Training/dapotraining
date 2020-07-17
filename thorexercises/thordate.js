//Write a JavaScript program to get the current date.  Go to the editor
//Expected Output : 
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
let today = new Date();
  let mm = today.getMonth();
  let dd = today.getDate();
  let yyyy=today.getFullYear();
  if (mm<10){
   mm='0'+mm;
  }
  if(dd<10){
  dd='0'+mm;
  }
  console.log('Today is : ' + mm+'/'+dd+'/'+yyyy);
 //let hour = today.getHours();
 //let minute = today.getMinutes();
 //let second = today.getSeconds();
  //let prepand = (hour >= 12)? " PM ":" AM ";
  //hour = (hour >= 12)? hour - 12: hour;
  //if (hour===0 && prepand===' PM ') 
  //{ 
  //if (minute===0 && second===0)
  //{ 
  //hour=12;
  //prepand=' Noon';
  //} 
  //else
  //{ 
  //hour=12;
  //prepand=' PM';
  //} 
  //} 
  //if (hour===0 && prepand===' AM ') 
  //{ 
  //if (minute===0 && second===0)
  //{ 
  //hour=12;
  //prepand=' Midnight';
  //} 
  //else
  //{ 
  //hour=12;
  //prepand=' AM';
  //} 
  //} 
//console.log("Current Time : "+mm/dd/yyyy  + " : " + minute + " : " + second);




console.log(Date.constructor);