// ===============================
// Variable Naming Conventions (Best Practices)
// ===============================

// 1. camelCase (most common for variables and functions)
let userName;
let totalPrice;
function calculateSum() {
  // function code
}

// 2. PascalCase (used for classes)
class UserAccount {
  constructor(name) {
    this.name = name;
  }
}
class ShoppingCart {}

// 3. snake_case (sometimes used, less common in JS)
let user_name;
let total_price;

// 4. UPPERCASE_SNAKE_CASE (used for constants)
const MAX_VALUE = 100;
const API_KEY = "abc123";

// ===============================
// Summary Table in comments
/*
| Style               | Usage                  | Example           |
|---------------------|------------------------|-------------------|
| camelCase           | variables, functions   | userName          |
| PascalCase          | classes                | UserAccount       |
| snake_case          | sometimes variables    | user_name         |
| UPPERCASE_SNAKE_CASE| constants              | MAX_VALUE         |
*/

