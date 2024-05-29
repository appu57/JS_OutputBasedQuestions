let x=100;
let y = x++;
let z=++x;
let n =(x==y)?z++:++z;
console.log(n); //103


// Post-increment operator (++) is applied to x, which means the current value of x (100) is assigned to y, 
//and then x is incremented by 1. So, y becomes 100, and x becomes 101


// Pre-increment operator (++) is applied to x, which means x is first incremented by 1 (becomes 102), 
//and then the new value of x is assigned to z. So, z becomes 102