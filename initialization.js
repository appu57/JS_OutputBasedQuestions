let x=5,y=10,z=25;
x=y;
x=y=z;
console.log(x,y,z);//becuase in expression assignments are right associative so x y z will have 25 because z assigns value to x and y