let arr = [1];
arr.length=4;
arr[3]=2;
for(let i in arr)
{
    console.log(i);
}
//prints 1 and 3 becuase The for...in loop iterates over all enumerable properties of the array arr, including indices and any additional properties.
//It logs the indices 0 and 3, as these are the defined indices with corresponding values in the array.


"###############################################################################################################################################################"



function sum(nums)
{
    let length = nums.length;
    var result =0;
    for(var i=0;i<=length;i++)
    {
      result+=nums[i];   
    }
}
let array = [1,2,3,4,5];
console.log(sum(array));  //undefined because the loop should run from 0 to n-1 but here loop runs from 0 to n , in array when we try to access out of bound arry elements it prints undefined so when we add undefined to number we get resul as NaN or undefined