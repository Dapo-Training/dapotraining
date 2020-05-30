//Area of a trainagle is half base times height. a is height and b is basegit
let a;
let b;
function AreaTriangle (a,b){
    return a*b*0.5;
}
a = 5;
b = 6;
let c = AreaTriangle (a,b);
console.log('The area of a triangle with sides of ' +a+' and '+b+' will be: '+ c)