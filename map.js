const arr = ['10','10','10'];
console.log(arr.map(parseInt));//[ 10, NaN, 2 ]


//When parseInt is called with only one argument (i.e., parseInt(string)), it tries to parse the string as an integer with a default radix of 10. This is why '10' is parsed as 10.
//When parseInt is called with two arguments (i.e., parseInt(string, radix)), the radix specifies the base of the numeral system to be used. If the radix is not between 2 and 36 or is not specified, 
//parseInt tries to determine the radix by looking at the string format. If the string starts with '0x' or '0X', it is parsed as a hexadecimal number (radix 16). Otherwise, it is parsed as an octal number (radix 8) if it starts with '0'. 
//Otherwise, it is parsed as a decimal number (radix 10). In this case, '10' is parsed as a binary number (radix 2), resulting in 2.

//map function gives us a callback function which has element and index when we directly pass that into parseInt() it turns as (string,radix)





//parseInt('10',0) =>10  (default radix),
//parseInt('10',1) =>NaN
//parseInt('10',2) =>2 //parses the string 10 to boolean since we gave radix as 2 