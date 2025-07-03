// ===============================
// JavaScript Essentials for Developers
// ===============================

// 1. Variable Declarations
// Use let and const (prefer const if variable won't change)
let age = 25;            // mutable variable
const name = "Alice";    // constant variable

// 2. Variable Naming Rules & Conventions
// camelCase for variables and functions, PascalCase for classes
let userName;    // valid
// Avoid reserved words, no spaces or starting with digits

// 3. Data Types
let str = "Hello";        // string
let num = 42;             // number
let bool = true;          // boolean
let nothing = null;       // null
let undef;                // undefined
let obj = { key: "value" }; // object

// 4. Type Conversion (Important for data manipulation)
let val = "123";
let numberVal = Number(val);       // convert string to number
let strVal = String(num);          // convert number to string
let boolVal = Boolean("");         // convert to boolean (false here)

// 5. Operators (Commonly used)
// Arithmetic
let sum = 5 + 3;
sum += 2;    // shorthand addition

// Comparison
console.log(sum === 10);  // strict equality check

// Logical
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID);  // false

// 6. Functions (Core of JS)
// Declare and call
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Bob"));

// 7. Control Flow
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// 8. Numbers & Math
let price = 19.99;
console.log(Math.round(price));  // 20
console.log(Math.random());      // random number between 0 and 1

// ===============================
// Summary:
// - Use let/const with meaningful names (camelCase)
// - Understand basic data types and type conversion
// - Master arithmetic, comparison, and logical operators
// - Write functions for reusable code
// - Control flow with if/else and loops
// - Use Math for numeric operations
