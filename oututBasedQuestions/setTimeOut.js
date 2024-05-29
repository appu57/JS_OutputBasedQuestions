const object = {
    message:"Hello",
    showMessage(){
        console.log(this.message);
    }
}
object.showMessage();//HELLO

setTimeout(()=>{
   object.showMessage();//HELLO
},1000);

console.log(object.showMessage);//[Function: showMessage]

setTimeout(object.showMessage,1000);//undefined

setTimeout(object.showMessage.bind(object),2000);//hello
setTimeout(fn.apply(object),1000);

//The difference between using a function within setTimeout(9) and directly passing a function into setTimeout(15) lies in how they handle the context (this) when the function is executed.


//In JavaScript, a callback is a function that is passed as an argument to another function 
//and is executed later, usually after some asynchronous operation completes or at a specified time.
//In setTimeout( function(){},1000) there the function is passed as an arguement to it.

//Method 1 line 9

// When passed as a callback to setTimeout using an arrow function

// Explanation: In this case, we're using an arrow function as the callback to setTimeout. Arrow functions do not have their own this context;
// instead, they inherit the this value from the enclosing lexical scope. So, inside the arrow function, this still refers to the object object,
// preserving the correct context for showMessage.


//Method 2 line 15

// When passed as a callback to setTimeout without preserving the context:

// Explanation: Here, object.showMessage is passed directly to setTimeout without any preservation of the object context. 
//When showMessage is eventually called by setTimeout, it loses its connection to object. In this case, this inside showMessage will refer to the 
//global object (window in a browser, or global in Node.js) or undefined in strict mode, neither of which have a message property, resulting in undefined.

// When you directly pass a function to setTimeout, it does not retain its original context by default. Instead, the function will be executed in the global context (window in a browser) or undefined in strict mode

//TO solve above issue , use bind()