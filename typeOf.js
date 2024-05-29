var x = [typeof x, typeof y][1];
console.log(typeof typeof x);//string because var is declared and initialised , x is initialised with undefined and since y is not declared anywhere typeof y is also undefined so we get ["undefined","undefined"][1] , first index of an array is "undefined" so var x = "undefined"; console.log(typeof typeof x) is typeof x is "undefined" so typeof "undefined" is string

let a = [typeof a, typeof b][1];//ReferenceError: Cannot access 'a' before initialization because let is declared and never initialised with any value/undefined so there we get error
console.log(typeof typeof a);