var obj = {  //also called as  constructor invocation.
    x:2,
    func:function(){
        console.log(this.x);
    }
}
obj.func(); //prints 2
new obj.func(); //prints undefined

//when obj.func() is called this.x refers to the x property of the object to which this points
//when new obj.func() is called , this now points to the newly created object, this.x evaluates to undefined because the new object does not have an x property.

//In JavaScript, when a function is called with the new keyword, it creates a new object, 
//sets the this keyword to point to that newly created object, and then executes the function. This process is called constructor invocation

// new obj.func() creates a new object.
// It sets the this keyword inside the func function to point to this newly created object.
// It then executes the func function.



"###############################################################################################################################################################"
function calculate(num)
{
    return num*0.01;
}

console.log(typeof calculate('hello')); //number

//Even though the input 'hello' is a string, JavaScript will implicitly convert it to a number when performing arithmetic operations like multiplication


"###############################################################################################################################################################"
let test = function(){
    console.log("window scope",this);  //prints window functions/variables ,  the test function is called directly (test()), without any context, so inside test, this refers to the global object (window in a browser environment). This is because in non-strict mode, when a function is called without any context, this defaults to the global object.In JavaScript, when a function is called without an explicit context (i.e., without using dot notation or call/apply/bind to specify this),
    return function(){
        console.log("object scope",this);//prints the variable/function within object obj
    }
}


const obj1 ={
    a:1,
    b:test()// the test function is called directly (test()), without any context, so inside test, this refers to the global object (window in a browser environment). This is because in non-strict mode, when a function is called without any context, this defaults to the global object.
}
// test();
obj1.b();

// In JavaScript, the value of this inside a function depends on how the function is called. In your code:

// The test function is defined as a function expression, which means it's assigned to the variable test.
// When you call test() to assign it to the property b of the obj object, the value of this inside test refers to the global object (window in a browser environment).
// When you call obj.b(), you're invoking the function returned by test(). Since it's called as a method of obj, the value of this inside this inner function refers to the obj object.
// So, the first console.log statement prints the window scope because it's executed in the global context, while the second console.log statement prints the object scope because it's executed as a method of the obj object.