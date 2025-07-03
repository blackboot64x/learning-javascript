// Type Conversion

// String Conversion
let num = 100;
let str = String(num);
console.log(str);            // "100"
console.log(typeof str);     // "string"

// Number Conversion
let strNum = "123";
let realNum = Number(strNum);
console.log(realNum);        // 123
console.log(typeof realNum); // "number"

// Boolean Conversion
let emptyString = "";
let isTrue = Boolean(emptyString); // false
console.log(isTrue);

// 2. Automatic Type Coercion

console.log("5" + 2);     // "52"  (number converted to string)
console.log("5" - 2);     // 3     (string converted to number)
console.log("5" * 2);     // 10
console.log(1 + true);    // 2     (true becomes 1)
console.log(1 + false);   // 1     (false becomes 0)

/*
Summary:
- String(x)  : converts any value to a string
- Number(x)  : converts string or boolean to a number
- Boolean(x) : converts to true or false

Automatic coercion examples:
- "5" + 1  => "51" (number becomes string)
- "5" - 1  => 4    (string becomes number)
- true + 1 => 2    (true becomes 1)
*/
