//-------------Data type 


// Primitive Data Types (Single, immutable values)
// Reference (Non-Primitive) Data Types (Mutable, complex structures)

//----------------Primitive Data Types
// String: text
let name = "Alice";

// Number: integers or decimals
let age = 25;
let price = 19.99;

// Boolean: true or false
let isStudent = true;

// Undefined: declared but not assigned
let address;
console.log(address); // undefined

// Null: intentionally empty
let phone = null;

// Symbol: unique value (rarely used in basic JS)
let id = Symbol("unique");

// BigInt: for very large numbers
let bigNumber = 1234567890123456789012345678901234567890n;


//----------------Non-Primitive Data Types
// Object: key-value pairs
let person = {
  name: "Bob",
  age: 30
};

// Array: list of values
let colors = ["red", "green", "blue"];

// Function: block of code that can be called
function greet() {
  console.log("Hello!");
}

// Date, RegExp, etc. are also object types

