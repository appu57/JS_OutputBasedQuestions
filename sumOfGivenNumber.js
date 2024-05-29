function sum(num)
{
    let sum=0;
    let array = num.toString();
    let n= array.length;
    for(let i=0;i<n;i++)
    {
      sum+=parseInt(array[i]);
    }
    return sum;
}

console.log(sum(123456789)); //45