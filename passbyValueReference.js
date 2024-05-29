const user1 ={
    username:"name",
    followers:0
}
const user2 = user1;

user2.followers = user1.followers++;
console.log(user1.followers);//0
console.log(user2.followers);//0


//Because user 1 and user 2 points the same value in memory(same reference) so when we try to increment user1 value or user2 value both will be same 
//but since we r using post increment the Javscript increments followers by 1 but returns older value only so if user1.followers is 0 then user2 will also have same since both are referncing same value


"###############################################################################################################################################################"




function addIntoNoNPrimitive(array)
{
    array.push(1);
    console.log(array);
}
const array = [1,2,3,4];
addIntoPrimitive(array);
console.log("Original array" , array);


function addIntoPrimitive(num)
{
    num++;
    console.log(num);//2 the original value is not modified because we are sendind the num with a pass by value
}
const num=1;
addIntoPrimitive(num)
console.log("Original num",num);//1

//Pass by Value: When you pass primitive data types (such as numbers, strings, booleans) to a function, they are passed by value. 
//It means that a copy of the actual value is passed to the function, and any changes made to the parameter 
//inside the function do not affect the original value outside the function


//Pass by Reference: When you pass non-primitive data types (such as objects, arrays, functions) to a function, they are passed by reference. 
//It means that a reference (memory address) to the original value is passed to the function, rather than a copy of the value itself. 
//Any changes made to the parameter inside the function affect the original value outside the function.Example of pass by reference


//Also check referenceValue in "Array Function folder or repository" to know more of passbyReference
"###############################################################################################################################################################"