// ===============================
// Variable Naming Rules in JavaScript
// ===============================

// 1. Names can contain letters, digits, _ and $ only
let userName;    // valid
let $price;      // valid
let _count;      // valid
let total123;    // valid

// 2. Names must start with a letter, _ or $ (not a digit)
// let 123total;  // invalid: starts with digit
// let 9name;     // invalid: starts with digit

// 3. Names are case-sensitive
let myVar = 1;
let MyVar = 2;   // different from myVar

// 4. Cannot use reserved keywords as names
// let for;      // invalid
// let function; // invalid

// 5. No spaces or special characters allowed
// let my name;  // invalid: contains space
// let user-name; // invalid: contains hyphen
