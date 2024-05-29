const str1 = 'Hi\nthere';
const str2 = `Hi
there`;

console.log(str1==str2);  //true

//When you use single quotes ('), the string is treated as a single line, 
//and if you want to include a line break, you need to use the escape sequence \n to represent it explicitly.


//When you use backticks (``), you can directly include line breaks by 
//pressing the Enter key, and JavaScript interprets them as actual line breaks without needing escape sequences.


"###############################################################################################################################################################"
const arr1 = ['Javascript','Universe'];
const arr2 = ['Javascript','Universe'];

console.log(arr1 == arr2);  //false
console.log(arr1===arr2);   // false

//In JavaScript, when you compare two arrays using the equality operators (== and ===), the comparison checks if they refer to the same object in memory, not if they have the same content.
//arr1 == arr2: This comparison checks if arr1 and arr2 reference the same array object. Since they are two separate array objects (even though they have the same content), the result is false.
//arr1 === arr2: This strict equality comparison also checks if arr1 and arr2 reference the same array object. As they are distinct array objects, the result is again false.
//To compare the content of arrays, you would need to iterate over their elements and compare them individually. Alternatively, you could use methods like JSON.stringify() to compare their serialized representations.


console.log(JSON.stringify(arr1)==JSON.stringify(arr2)); //true

"###############################################################################################################################################################"

const str = "hello world";
const arr = str.split(" ");//space between
console.log(arr.join("-"));//hello-world

const modifiedString = str.split("");//no space between 
console.log(modifiedString.join("-"));//h-e-l-l-o- -w-o-r-l-d

console.log("hello,world".indexOf("world"));//6



"###############################################################################################################################################################"
const array = ["a","b","c"];
console.log(array.join("").toUpperCase()); //ABC