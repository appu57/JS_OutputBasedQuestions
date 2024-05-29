function Car(name) {
    this.name = name;
    this.getName = () => this.name;
  }
  const car = new Car('BMW');
  
  console.log(car.getName());
  
  const { getName } = car;//Object destructuring The arrow function () => this.name; still refers to car because arrow functions inherit this from the enclosing scope (here, the Car constructor where it was defined).
  //Therefore, invoking getName() (where getName is extracted from car) also returns 'BMW'.
  console.log(getName()); 

"###############################################################################################################################################################"
const obj ={
   name:"",
   setName(){
     this.name="name";
     return this.name;
   },
   regular : function(){
    console.log(this.name);
   },
   arrow : ()=>{
    console.log(this.name);
   }

}
const {name,setName,regular,arrow}=obj;
console.log(setName());
obj.setName();
obj.regular();
obj.arrow();//undefined
"###############################################################################################################################################################"
//THIS in function or constructor object refers to the function/constructor object . THIS in objects refers to global lexical values
//Object destructuring allows you to extract specific properties from an object and assign them to variables with the same name. In this case, it extracts the getName property from the car object and assigns it to a variable also named getName.

function check(name) {
    this.name = name;
    const getName = () => this.name;
    return {getName};
    //return getName for closure
}

// console.log(check("name")());//way to call a function within function closure
// console.log(check('name').getName())



"###############################################################################################################################################################"