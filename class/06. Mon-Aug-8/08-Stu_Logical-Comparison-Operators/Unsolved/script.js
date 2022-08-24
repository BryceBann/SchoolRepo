var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e);
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a === b);
console.log(b == e);
console.log(c < b);
console.log(d > 0);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);
console.log( !expression1 || expression2);
  
//changed comparison
console.log(a == b); //removed a = to not check types
console.log(b !== c);//changed var to get a differnt var data value or removing the the ! to check the 
console.log(c > b);//fliped sign due so it will show 100 is bigger than 50 
console.log(d >= 0);

//changed logical op.
console.log(expression1 && !expression2); //added the not op idk why...
console.log(expression1 || expression2); //removed the not logical op. 
