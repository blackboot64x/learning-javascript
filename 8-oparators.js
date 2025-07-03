// ===============================
// 1. Arithmetic Operators
// ===============================

let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.3333...
console.log(a % b);  // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 10^3 = 1000

// ===============================
// 2. Assignment Operators
// ===============================

let c = 5;

c = c + 2;  // same as c += 2
c += 2;     // adds 2: c = c + 2
c -= 1;     // subtracts 1: c = c - 1
c *= 3;     // multiplies by 3: c = c * 3
c /= 2;     // divides by 2: c = c / 2
c %= 4;     // modulus: c = c % 4

// ===============================
// 3. Comparison Operators (return true or false)
// ===============================

console.log(a == b);   // Equal (value only): false
console.log(a === b);  // Strict equal (value + type): false
console.log(a != b);   // Not equal: true
console.log(a !== b);  // Strict not equal: true
console.log(a > b);    // Greater than: true
console.log(a < b);    // Less than: false
console.log(a >= b);   // Greater or equal: true
console.log(a <= b);   // Less or equal: false

// ===============================
// 4. Logical Operators
// ===============================

let isAdult = true;
let hasTicket = false;

console.log(isAdult && hasTicket); // AND: false (both must be true)
console.log(isAdult || hasTicket); // OR: true (one is true)
console.log(!isAdult);              // NOT: false (negation)

// ===============================
// 5. String Operators
// ===============================

let firstName = "John";
let lastName = "Doe";

console.log(firstName + " " + lastName); // Concatenation: "John Doe"

// ===============================
// 6. Unary Operators
// ===============================

let x = 5;
console.log(++x);  // Increment: 6
console.log(--x);  // Decrement: 5
console.log(typeof x); // typeof operator: "number"

// ===============================
// 7. Ternary Operator (Conditional)
// ===============================

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
