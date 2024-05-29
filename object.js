let obj = {lang:"Javascript"};
const value = {};
value.name = obj;

obj = null;
console.log(value.name) ; //not null because when we set obj to null, you're removing the reference to the original object from obj, but the reference to the original object stored in value.name remains unaffected.

//When a obj reference is 1 , it will not perform a garbage collection(null) since here value object is referenced to obj the flagvalue of value is set to 1 hence when we try to assign a obj=null its refernced object will not change
//or assigning null in simple words means we are removing reference from original object