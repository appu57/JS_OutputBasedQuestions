const numbers = [];
for(var i=0;i<5;i++);{
  numbers.push(i+1);
}
console.log(numbers);//[6] because till i less than 5 condition becomes true and moves ahead and finds ; and stops execution of that loop then when i=5 condition is false so comes out of loop and { numbers.push(i+1)} is executed since {} after ; is considered out of loop and new line