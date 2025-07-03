//variable
var a = 5;
var b = 8;

console.log("The addition of a and b is " + (a + b));


//Declare a variable

var x = 1;
var x = 2;
x = 3;    
console.log("var x:", x);

let y = 10;
y = 15;     
console.log("let y:", y);

const z = 100;
console.log("const z:", z);

/*
| Feature          | var         | let         | const       |
|------------------|-------------|-------------|-------------|
| Scope            | Function    | Block       | Block       |
| Redeclaration    | ✅ Yes      | ❌ No       | ❌ No       |
| Reassignment     | ✅ Yes      | ✅ Yes      | ❌ No       |
| Use              | Old (avoid) | Modern Use  | Fixed Values|
*/