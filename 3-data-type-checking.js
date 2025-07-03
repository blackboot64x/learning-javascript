//-------------Data type checking

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof address);   // "undefined"
console.log(typeof phone);     // "object" ← weird quirk in JS
console.log(typeof person);    // "object"
console.log(typeof colors);    // "object"
console.log(typeof greet);     // "function"

/*
PRIMITIVE:
- String     → "Hello"
- Number     → 123, 12.34
- Boolean    → true / false
- Undefined  → variable declared, not assigned
- Null       → empty value
- Symbol     → unique and immutable
- BigInt     → very large numbers (end with n)

REFERENCE:
- Object     → { key: value }
- Array      → [1, 2, 3]
- Function   → function code block

Use `typeof` to check data types.
*/