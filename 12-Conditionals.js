/*
===============================================================
                        JavaScript Conditionals
===============================================================

1. Comparing Variables
----------------------
- In JavaScript, you can compare values using comparison operators.
- Comparisons return a boolean value: `true` or `false`.

2. Comparison Operators
-----------------------
| Operator | Description             |
|----------|-------------------------|
| `==`     | Equal (loose)           |
| `===`    | Equal (strict, type + value) |
| `!=`     | Not equal (loose)       |
| `!==`    | Not equal (strict)      |
| `>`      | Greater than            |
| `<`      | Less than               |
| `>=`     | Greater than or equal   |
| `<=`     | Less than or equal      |

3. Conditional Statements
-------------------------
- Use `if`, `else if`, and `else` to execute code based on conditions.

*/

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

/*
4. Multiple Conditions and Logical Operators
--------------------------------------------
- Use `&&` (AND) and `||` (OR) to combine conditions.
*/

let score = 85;

if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 60 || score < 80) {
  console.log("Grade: B or below");
}

/*
5. Shorthand: Ternary Operator
------------------------------
- A compact `if...else`:
  `condition ? value_if_true : value_if_false`
*/

let isMember = true;
let discount = isMember ? "10% discount applied." : "No discount.";
console.log(discount);

/*
6. Logical NOT Operator
------------------------
- The `!` operator inverts a boolean:
  `!true` becomes `false`, `!false` becomes `true`.
*/

let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in to continue.");
}

/*
7. Summary: Conditionals & Comparison
-------------------------------------
| Concept             | Syntax Example                   | Notes                              |
|---------------------|----------------------------------|------------------------------------|
| If Statement        | `if (x > 5) {}`                  | Executes if condition is true      |
| If-Else             | `if (x) {} else {}`              | Choose between two paths           |
| Else If             | `if {} else if {} else {}`       | Check multiple conditions          |
| Ternary             | `x > 10 ? "Big" : "Small"`       | Shorthand for if...else            |
| AND (&&)            | `if (a && b)`                    | Both must be true                  |
| OR (||)             | `if (a || b)`                    | One must be true                   |
| NOT (!)             | `if (!isTrue)`                   | Inverts condition                  |

===============================================================
Conditionals help control program flow based on logic and input.
Use them to make decisions and create interactive behavior.
===============================================================
*/
