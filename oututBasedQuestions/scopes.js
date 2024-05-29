// function sum(){
//     let a = 8;
//     const b=2;
//     var c=a+b;
// }
// console.log(a) 
// console.log(b) 
// console.log(c)

// sum()

// console.log(a)
// console.log(b)
// console.log(c)

//We get a , b , c not defined to all console.log
"###############################################################################################################################################################"
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;//count becomes 1 only in the block scope 
    console.log(count);//1 
  }
  console.log(count); //0
})();

"###############################################################################################################################################################"