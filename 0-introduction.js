/*
===============================================================
                        JavaScript In-Depth Theory
===============================================================

1. What is JavaScript?
----------------------
- JavaScript (JS) is a high-level, interpreted programming language.
- Initially created to add interactivity to web pages.
- Runs primarily in browsers but also on servers via Node.js.
- Enables dynamic content updates, animations, form validations, and more.
- Along with HTML and CSS, forms the core technology of the web.

2. History of JavaScript
------------------------
- Created by Brendan Eich at Netscape in 1995.
- First appeared as Mocha, renamed to LiveScript, then JavaScript.
- Standardized by ECMA International as ECMAScript (ES).
- ECMAScript 1 published in 1997.
- Major update ES6 (2015) added modern features like classes, modules, arrow functions.
- ECMAScript is updated yearly with new features.

3. Characteristics of JavaScript
--------------------------------
- **Dynamically typed:** No need to declare variable types.
- **Weakly typed:** Automatic type conversion (type coercion) can happen.
- **Multi-paradigm:** Supports procedural, object-oriented, and functional programming.
- **Prototype-based:** Objects inherit directly from other objects.
- **Single-threaded:** Executes one command at a time but handles asynchronous tasks with event loop.
- **First-class functions:** Functions are treated as variables (can be passed, returned).

4. How JavaScript Works
-----------------------
- JS code is loaded by the browser’s JS engine (e.g., V8 in Chrome).
- Engine parses, compiles (just-in-time), and executes JS code.
- Manipulates the DOM (Document Object Model) to change webpage dynamically.
- Event-driven: waits for events like user clicks or data arrival.
- Uses event loop to handle asynchronous callbacks without blocking.

5. JavaScript Syntax Overview
-----------------------------
- Case sensitive.
- Statements usually end with semicolons (optional but recommended).
- Supports expressions, operators, variables, functions, control structures.
- Comments:
  - Single-line: `// comment`
  - Multi-line: `/* comment * /`

6. Variables and Scope
----------------------
- Variables hold data; declared with `var`, `let`, or `const`.
- `var` is function-scoped, can lead to unexpected bugs due to hoisting.
- `let` and `const` are block-scoped (introduced in ES6).
- `const` is used for constants — must be assigned at declaration and not reassigned.
- Understanding scope and hoisting is crucial to avoid bugs.

7. Data Types
-------------
- Primitive types:  
  - `string` — text data  
  - `number` — integers and floats  
  - `boolean` — true/false  
  - `null` — intentional absence of any object value  
  - `undefined` — variable declared but not assigned  
  - `symbol` — unique and immutable identifiers (ES6+)  
  - `bigint` — for arbitrarily large integers (ES2020+)
- Reference types:  
  - `object` — collections of key-value pairs  
  - `array` — ordered lists (special objects)  
  - `function` — callable objects

8. Operators
-------------
- Arithmetic (`+`, `-`, `*`, `/`, `%`, `**`)
- Assignment (`=`, `+=`, `-=`, `*=`, `/=`, `%=`) — shorthand for operations + assign
- Comparison (`==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`)
- Logical (`&&`, `||`, `!`)
- String concatenation (`+`)
- Unary (`typeof`, `++`, `--`, `delete`)
- Ternary conditional (`condition ? exprIfTrue : exprIfFalse`)

9. Control Flow Structures
--------------------------
- Conditional statements: `if`, `else if`, `else`, `switch`
- Loops:  
  - `for` — traditional loop  
  - `while` and `do...while` — condition checked before or after loop  
  - `for...in` — iterates over object keys  
  - `for...of` — iterates over iterable objects like arrays, strings

10. Functions
-------------
- Declared with `function` keyword or as arrow functions (`=>`)
- Can be named or anonymous.
- Can take parameters and return values.
- Functions are first-class citizens; can be assigned to variables, passed as arguments, returned from other functions.
- Support closures — functions that “remember” the environment where they were created.

11. Objects and Arrays
----------------------
- Objects: key-value pairs, keys are strings or symbols, values can be any type.
- Access properties with dot notation (`obj.key`) or bracket notation (`obj["key"]`).
- Arrays: ordered collections of values, indexed starting at 0.
- Both are mutable; arrays have many built-in methods (`push`, `pop`, `map`, `filter`, etc.).

12. Prototypes and Inheritance
------------------------------
- JavaScript uses prototype-based inheritance.
- Objects have an internal link to a prototype object.
- Properties/methods are looked up in the prototype chain.
- ES6 introduced `class` syntax as syntactic sugar over prototype inheritance.

13. Asynchronous JavaScript
---------------------------
- JS uses event loop to handle async operations.
- Common async methods: callbacks, promises, async/await.
- Allows non-blocking operations (e.g., network requests, timers).
- Promises represent future completion or failure of async tasks.
- Async/await syntax (ES2017) simplifies promise handling.

14. JavaScript Engines
----------------------
- Engines parse and execute JS code.
- Examples: V8 (Chrome, Node.js), SpiderMonkey (Firefox), JavaScriptCore (Safari).
- Modern engines use Just-In-Time (JIT) compilation for performance.

15. Modules
------------
- ES6 introduced modules to organize code into reusable files.
- Use `export` to expose parts of a module.
- Use `import` to bring in functionality from other modules.
- Helps with code maintainability and namespace management.

16. Error Handling
------------------
- Use `try...catch...finally` blocks to handle runtime errors gracefully.
- Errors thrown using `throw` keyword.
- Helps prevent app crashes and manage unexpected situations.

17. Browser APIs and DOM
------------------------
- JavaScript interacts with browser-provided APIs.
- DOM API allows reading and modifying the HTML document.
- Other APIs include Fetch (network requests), LocalStorage (browser storage), Canvas (graphics), etc.

18. JavaScript in Web Development
---------------------------------
- Client-side scripting for UI/UX interactivity.
- Frameworks/libraries like React, Angular, Vue simplify complex apps.
- Server-side with Node.js enables full-stack development using JS.
- Bundlers (Webpack, Parcel) and transpilers (Babel) help manage and convert JS code.

19. Modern JavaScript Features (ES6+)
-------------------------------------
- `let` and `const` for block scope variables.
- Arrow functions `() => {}` for concise syntax.
- Template literals using backticks `` for embedding expressions.
- Destructuring for extracting values from arrays/objects.
- Default parameters in functions.
- Spread/rest operators `...` for arrays and objects.
- Promises and async/await for async code.
- Classes and modules for better organization.

20. Best Practices
------------------
- Always declare variables with `let` or `const`.
- Use strict equality (`===` and `!==`) to avoid type coercion bugs.
- Write meaningful, readable code with proper naming.
- Avoid global variables to prevent conflicts.
- Use modular code organization.
- Handle errors properly.
- Comment your code and keep functions small.
- Test and debug frequently.

===============================================================
This detailed overview is your foundation for mastering JavaScript.
Pair this with hands-on practice to build strong skills.
===============================================================
*/
