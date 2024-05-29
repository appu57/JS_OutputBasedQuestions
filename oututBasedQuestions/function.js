function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo());//8
//Functions are hoisted to top so first "return 3" is hoisted then the function "return 8" overwrites the function with "return 3" and therefore return bar() is 8

"###############################################################################################################################################################"
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
console.log(foo());//3  {var bar=undefined ; bar=function(){} ; return ;}//after hoisting
//In this code, the variable bar is declared using the var keyword, which means it is function-scoped rather than block-scoped. However, it's 
//important to note that JavaScript's variable declarations are hoisted to the top of their containing function or script, but their assignments are not hoisted

//The second var bar declaration assigns a different function expression function() { return 8; } to bar. However, because of hoisting, this declaration 
//var bar  is hosited but the assignment is not completed until compiler reaches that point , but in above example assignement value for value bar is after return therefore the function return 3
"###############################################################################################################################################################"
function foo(){
    // return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
console.log(foo());//var bar=undefined is hoisted to the top but since bar(which was a undefined) is called as a method () itthrows Uncaught TypeError: bar is not a function


"###############################################################################################################################################################"
greetings();
var greetings = function(){
console.log("First Greetings");
};
greetings();
function greetings(){
console.log("Second Greetings");
}
greetings();
//greetings is hoisted to top with value undefined for (line 44) but its assignment is not moved so value is undefined now in line 48 it is a function hence the whole 
//function is hoisted and overwrites greetings to a functions so when you call greeting() 1st time "second greeting is printed" then compiler reaches 44 and performs assignment of a value and now greetings() is overwritten and 
//second greeting() prints "first greeting" then again it reaches 47 and overwrites the greeting and prints "second greeting"
"###############################################################################################################################################################"

var variable = 10;
(() => {
console.log(variable); //10 because of line 57
variable = 20;
console.log(variable); //20 
})()
console.log(variable);//20
var variable = 30;//redeclaration of function scope/global scope are allowed
console.log(variable);//30

"###############################################################################################################################################################"

// var variable = 10;
// () => {
// console.log(variable);
// var variable = 20;
// console.log(variable);
// })()
// console.log(variable);
// var variable = 30;
// console.log(variable);
// This is an arrow function that is not immediately invoked properly because it's missing parentheses after the arrow function declaration. Therefore, it's treated as a function expression and not invoked. The body of the arrow function is not executed.
"###############################################################################################################################################################"
var var1 = 10;
(()=> {
var3 = 35;
console.log(var3)//35
var var3 = 45;
var2 = 15;
console.log(var1)//10
})()
console.log(var2)//15 because a variable declared with no var,let,const are global scoped variables
console.log(var3)//undefined
var var1 = 30
console.log(var1)//30

//Within IIFE var3 is not declared with var,let,const so var3 becomes globally scoped , then all declaration within the IIFE is moved to function scope 
//so var3=35;var var3; the var3 with var is hoisted to top but not its assignment so line 83 prints 35 but once compiler reaches the var var3=45 the globally scoped
//variable becomes function scopes hence not defined in line 89
"###############################################################################################################################################################"
let counter = (function(){
    let k = 0;
    return () => k++;
})();
console.log(counter());//0
console.log(counter());//1
console.log(counter());//2