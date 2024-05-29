/* Deep and Shallow copying */ //shallow copy
var a =[1,2,3];
var b=a; 
a.push(4);
console.log(b);   //value is added since its a shallow copy 

"###############################################################################################################################################################"

/* The below function used to create a new array every time a function is called , modify the code so we dont create same array again */
//Use closure to avoid the creation

function createArray(){
    let newArray = new Array(100).fill('0');
    return (index)=>newArray[index];
}

let func = createArray(); //returns the closure of inner function so every time we call func(x) inner function is called which has access to inner scopes, call function once the array is initialised now after that each time u call inner method the only inner function is called and array is not reinitialised
console.log(func(10));
console.log(func(10));

"###############################################################################################################################################################"

for(var i=0;i<5;i++)
{
    setTimeout(() => {
        console.log(i);   //when we use var prints 5 because each time it finds non blocking code , the line gets added to queue and by the time the queue is called back ,executes the loop would been 5
    }, 1000);
}

for(let i=0;i<5;i++)
{
    setTimeout(() => {
        console.log(i);  //prints 0,1,2,3,4
    }, 1000);
}

// When you use var to declare a variable, it has function scope or global scope, and it does not have block scope. 
//In your case, the setTimeout callback function is capturing the same variable i from the outer scope, and by the time the callback runs, 
//the loop has already completed, and i is equal to 5. So, you see 5 printed five times.
// When you use let, it has block scope, which means a new i is created for each iteration of the loop. 
//The setTimeout callback captures the value of i at each iteration, resulting in the expected behavior where you see 0, 1, 2, 3, 4 printed.

"###############################################################################################################################################################"

var x =1;
function foo(){
    x=10;
    return;
    function x(){} //moves to top and local variable
}
foo();
console.log("value"+x);

// var x; // Declaration of global variable x is hoisted
// function foo() {
//     var x; // Declaration of local variable x is hoisted
//     x = 10; // Assignment to local variable x
//     return;
//     function x() {} // Declaration of local function x is hoisted
// }

// foo();
// console.log("value" + x); // Refers to the global variable x, which is still 1

//In js variable and function declaration is hoisted at top of respective scope so function x() is hoisted top of foo()  
//and becomes a local var the assignment x =10 inside foo modifies the local value of x not global and prints 1

"###############################################################################################################################################################"

var name ="Username";
(function(){
    console.log(name);
    var name="No Username";
})();

//The above code after hoisting of declaration

var name = "Username";

(function() {
    var name; // Declaration is hoisted
    console.log(name); // Output: undefined
    name = "No Username"; // Initialization
})(); 

//undefined because var name ="No username" is hoisted to top and name is undefined because assignment is not yet executed

"###############################################################################################################################################################"

const obj ={
    value:"Hello",
    print(){
        setTimeout(() => {
            console.log("value is "+this.value);
        }, 0);
    }
}
obj.print();

// The key here is that arrow functions do not have their own this context and instead inherit it from the surrounding scope (lexical scoping). 
//In this case, the arrow function inside setTimeout inherits this from the print method similar to closure

"###############################################################################################################################################################"

let [xx, ...y]=[1,2,3,4,5];   //rest operator indicates 1 is taken by xx and rest to be assigned to y so y[1] is 3 for [2,3,4,5]
console.log("Value of y"+y[xx]);

"###############################################################################################################################################################"
let prop = "age";
let person = { [prop] :30};  //dynamic property assigned where age is the property name 
console.log("Value of prop"+person.prop);

//Undefined because in 117 we create a object person and the property name is defined by the value of prop ("age") so its equivalent in writing as age:30
//118 tries to access the property names prop which is not there so it prints undefined

console.log("After knowing the dynamic property value using dot operator"+person.age);
console.log("After knowing the dynamic property value using the value assigned to prop"+person[prop]);
"###############################################################################################################################################################"

console.log([] == ![]); //true
//[]is truthy ! makes it falsy and with abstract equlity (==) operator both operands are converted to numbers so the expression becomes 0==0

function returnType(){
    return returnType;
}
console.log(typeof returnType());//'function'

"###############################################################################################################################################################"
let s ="abc";
s[1]="z";
s[2]="y";
console.log(s);  //because string is immutable
"###############################################################################################################################################################"
// function a(){
//     console.log(this);
// }
// var b = {
//     foo: a,
// };
// b.foo();  //the function a is called as object when a is called as object console.log(this);refers to b function so return b function
"###############################################################################################################################################################"

var variable = 1000;

function variable(){
    console.log("Hoisting in javascript moves function to the top before var variable");
}

console.log(variable); //prints 1000

"###############################################################################################################################################################"

let  program={
    name:"Javascript"
}

program.program= program;//circular referencing can be used in bidirectional data structure

console.log(program);
console.log(program.program);
console.log(program.program.program);

//the above three console prints the same value 

console.log(program.program.name);

//the above prints the Javascript
"###############################################################################################################################################################"

function addtest(a,a)
{
    console.log(a);//undefined because first arguement 0 is mapped with a , then second a is sent so automatically undefined is initialised to a
}

addtest(0);
"###############################################################################################################################################################"

let counter = 0;
let answer= counter++;
console.log("counter"+counter); //1
console.log("answer"+answer);  //0 This behavior is because the post-increment operator (counter++) first uses the current value of the variable and then increments it.

"###############################################################################################################################################################"

function print(r)
{
    const l = console.log;
    const arr = ['red','blue','green'];
    const selectedCol = arr[parseInt(Number(r))];
    l(`${selectedCol}`)  //blue the expression is evaluated from left to right 1>5 false and later false > -7 true because false is converted to 0 0>-7 true so the function print is called with parameter true which is 1
}

print(1>5>-7)

"###############################################################################################################################################################"

const random = Math.random() * 6 +1; //Math.random()returns a double value greater than or equal to 0.0 and less than 1.0. It generates a pseudo-random double value between 0.0 (inclusive) and 1.0 (exclusive).
//*6  scales the random number generated by Math.random() to be between 0 and 5.99999... (inclusive). Multiplying the random value by 6 effectively expands the range from 0.0-1.0 to 0.0-6.0
//+1 Finally, adding 1 to the scaled random value shifts the range up by 1 unit, resulting in a random number between 1 and 6 (inclusive)
"###############################################################################################################################################################"