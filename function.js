function getUserData(){
    return null;
}

const userData = getUserData();
console.log(userData);
// console.log(userData?.name);//undefined
//In JavaScript, when you use the optional chaining operator (?.), it allows you to access properties of an object that may be null 
//or undefined without causing an error. If the object is null or undefined, the expression short-circuits, and undefined is returned.