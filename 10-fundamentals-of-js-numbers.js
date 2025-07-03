// ===============================
// JavaScript Numbers Basics
// ===============================

// 1. JavaScript has only one number type: "number" (no separate int or float)
let integerNum = 10;       // integer
let floatNum = 3.14;       // floating-point number

console.log(typeof integerNum); // "number"
console.log(typeof floatNum);   // "number"

// 2. Special numeric values
let infinityNum = Infinity;   // Represents infinity
let negativeInfinity = -Infinity;
let notANumber = NaN;         // Not a Number (result of invalid math)

console.log(infinityNum);       // Infinity
console.log(negativeInfinity);  // -Infinity
console.log(notANumber);         // NaN

// 3. Precision limitations with floating point
console.log(0.1 + 0.2);      // 0.30000000000000004 (not exactly 0.3)
console.log(0.1 + 0.2 === 0.3); // false

// 4. You can use underscores (_) to improve readability of large numbers (ES2021+)
let largeNum = 1_000_000;
console.log(largeNum);       // 1000000

// 5. Common numeric methods and properties
console.log(Number.MAX_VALUE);    // Largest possible number
console.log(Number.MIN_VALUE);    // Smallest positive number
console.log(Number.isNaN(notANumber));  // true
console.log(Number.isFinite(infinityNum)); // false

// 6. Converting strings to numbers
console.log(Number("123"));       // 123
console.log(parseInt("123px"));   // 123 (parses integer part)
console.log(parseFloat("3.14abc")); // 3.14 (parses float part)

// 7. Math object for common math operations
console.log(Math.round(4.7));     // 5
console.log(Math.floor(4.7));     // 4
console.log(Math.ceil(4.1));      // 5
console.log(Math.sqrt(16));       // 4
console.log(Math.pow(2, 3));      // 8
console.log(Math.random());       // random number between 0 and 1
