const arr = ["name"];
const obj ={};
obj.name = "Front";
console.log(obj);//{ name: 'Front' }
console.log(obj[arr]); //Front
obj[arr]="JS";
console.log(obj.name);
//dynamic property