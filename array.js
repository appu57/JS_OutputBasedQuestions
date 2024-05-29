//remove duplicates
let arr =[1,1,2,2];
let newArr = arr.filter((data,index)=>
 {
    return arr.indexOf(data)==index;
 });
console.log(newArr);
"###############################################################################################################################################################"

//sort an array
let arr1=[1,2,3,4,5];
for(let i=0;i<5;i++)
{
    for(let j=i+1;j<5;j++)
    {
      if(arr1[i]<arr1[j])
      {
        let temp = arr1[i];
        arr1[i]=arr1[j];
        arr1[j]=temp;
      }
    }
}
console.log("Descending array",arr1);

"###############################################################################################################################################################"

//merge two array with no duplicates => [...new Set(arr1.concat(arr2))]
let a = [0,1,2];
let b=a;
b[0] = 42;
console.log(a); //42,1,2

let newlist = [1,2,3].push(4); //push method returns the length of array so console.log prints 4 
console.log(newlist);
// console.log(newlist.push(5)); //error as newlist.push is not a function because .push gives length so newlist is 4 now when we again try to push to a numerical 4 it shows error
"###############################################################################################################################################################"
console.log(Array.isArray("[1,2,3]"));//false
console.log(Array.isArray(JSON.parse("[1,2,3]")));//true




//When you write "[1,2,3]", it's interpreted as a string literal, not an array. JavaScript treats it as a sequence of characters enclosed in double quotes.
//JSON.parse(): JSON.parse() is a built-in JavaScript function that parses a JSON string and converts it into a JavaScript object. When you call JSON.parse("[1,2,3]"), it parses the string representation of the array into an actual array object [1, 2, 3].




"###############################################################################################################################################################"
function maxNumber(numbers){
  return Math.max(...numbers)
}
console.log(maxNumber([1,2,3,4,5]));//5

"###############################################################################################################################################################"
//FALLBACK

const obj = {
  a:1,
  b:2
}
const value = obj.c || "default"; //fallback
console.log(value);
//we can use same in html for image tag using <img src="" onerror="this.src=``"
"###############################################################################################################################################################"