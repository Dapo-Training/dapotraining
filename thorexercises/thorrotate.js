//Write a JavaScript program to rotate'w3resource' in right direction by periodically 
//removing one letter from the end of the string and attaching it to the front
let a = 'w3resource';
let newarray = a.split('');
console.log(newarray);

let b = newarray.length-1;

let i;
for (i = 0; i < b; i++) { 
let c = newarray[b];
newarray.splice(b, 1);
newarray.splice(0,0,c)
console.log(newarray);
console.log(c);
}


