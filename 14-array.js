// ✅ 1. Array Creation
const fruits = ['apple', 'banana', 'cherry']; // Literal syntax
const empty = [];                             // Empty array
const numbers = new Array(1, 2, 3);           // Using constructor
const fixedSize = new Array(5);              // Creates [ <5 empty items> ]

// ✅ 2. Accessing Elements
console.log(fruits[0]); // 'apple'
console.log(fruits[2]); // 'cherry'
console.log(fruits[5]); // undefined (index out of bounds)

// ✅ 3. Modifying Elements
fruits[1] = 'orange'; // Replaces 'banana'
console.log(fruits);  // ['apple', 'orange', 'cherry']

// ✅ 4. Array Length
console.log(fruits.length); // 3

// ✅ 5. Adding and Removing Elements
fruits.push('mango');       // Add to end
fruits.unshift('grape');    // Add to start
console.log(fruits);        // ['grape', 'apple', 'orange', 'cherry', 'mango']

fruits.pop();               // Removes last item ('mango')
fruits.shift();             // Removes first item ('grape')
console.log(fruits);        // ['apple', 'orange', 'cherry']

// ✅ 6. Iterating Over Arrays
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// ✅ 7. Searching
console.log(fruits.indexOf('orange')); // 1
console.log(fruits.includes('apple')); // true

// ✅ 8. Slicing and Splicing
const sliced = fruits.slice(1, 3);     // From index 1 to 2 (not including 3)
console.log(sliced);                  // ['orange', 'cherry']

fruits.splice(1, 1, 'kiwi', 'melon');  // Remove 1 item at index 1, add 2
console.log(fruits);                  // ['apple', 'kiwi', 'melon', 'cherry']

// ✅ 9. Concatenation
const veggies = ['carrot', 'pea'];
const food = fruits.concat(veggies);
console.log(food); // ['apple', 'kiwi', 'melon', 'cherry', 'carrot', 'pea']

// ✅ 10. Sorting
const nums = [5, 2, 9, 1];
nums.sort();           // Default is string sort
console.log(nums);     // [1, 2, 5, 9]

nums.sort((a, b) => b - a); // Descending numeric sort
console.log(nums);         // [9, 5, 2, 1]

// ✅ 11. Filtering, Mapping, Reducing
const even = nums.filter(n => n % 2 === 0);   // [2]
const squared = nums.map(n => n * n);         // [81, 25, 4, 1]
const total = nums.reduce((sum, n) => sum + n, 0); // 17
console.log(even, squared, total);

// ✅ 12. Flattening Nested Arrays
const nested = [1, [2, 3], [4, [5]]];
const flat = nested.flat(2); // Depth of 2
console.log(flat);           // [1, 2, 3, 4, 5]

// ✅ 13. Destructuring
const [first, second, ...rest] = fruits;
console.log(first);  // 'apple'
console.log(rest);   // ['kiwi', 'melon', 'cherry']

// ✅ 14. Spread Operator
const copy = [...fruits];       // Copy array
const combined = [...fruits, ...veggies];
console.log(combined);

// ✅ 15. Checking if a Variable is an Array
console.log(Array.isArray(fruits)); // true

// ✅ 16. Finding Elements
const found = nums.find(n => n > 4);       // 9
const foundIndex = nums.findIndex(n => n > 4); // 0
console.log(found, foundIndex);
