// 1. Declare an Array
// - Declare an array with 5 elements containing fruit names.
// - Console log the element at the 3rd index.
// - Change the value of the element at the 2nd index to "jambura".
// - Console log the final array.

const fruits = ["apple", "banana", "mango", "watermelon", "coconut"]
console.log(fruits[2]);
fruits[1] = "jambura";
console.log(fruits)

// 2. Add or Remove Elements
// - Declare an array with 3 tourist destinations.
// - Add one more tourist destination to the array.
// - Add two additional tourist destinations to the same array.
// - Remove the last tourist destination that was added.
// - Display the final array in the console.

const touristDestination = ["cox bazar", "sajek", "sundar ban"];
touristDestination.push("Dubai");
touristDestination.push("green valley", "silicon valley");
touristDestination.pop();
console.log(touristDestination);

// 3. Checking Array Membership with `includes`
// - Create an array containing different book names.
// - Use the `includes` method to check if a JavaScript-related book exists in the array.
// - Print a message to the console indicating whether the book is present.

const books = ["dopamine detox", "Think and grow rich", "rich dad poor dad", "48 laws of power", "Deep work"]
if (books.includes("Deep work")) {
    console.log("The book is available in the list.");
} else {
    console.log("The book is not found in the list.");
}

// 4. Checking if It's an Array
// - Create several variables, each holding either an array or a non-array value.
// - Use `Array.isArray()` to check if each variable is an array.
// - Print a message to the console for each variable indicating if it is an array.

const age = 50;
const games = ["PUBG", "Once Human", "Call of Duty", "Dota 2", "Counter strike 2", "GTA VI"]
const names = "Alasan burgers";
const isStudent = false;
if (Array.isArray(age)){
    console.log("age is an Array");
}else {
    console.log("age is not an Array")
}

if (Array.isArray(games)){
    console.log("games is an Array");
}else {
    console.log("games is not an Array")
}

if (Array.isArray(names)){
    console.log("names is an Array");
}else {
    console.log("names is not an Array")
}

if (Array.isArray(isStudent)){
    console.log("isStudent is an Array");
}else {
    console.log("isStudent is not an Array")
}

// 5. Combining Arrays
// - Create two separate arrays with elements of your choice.
// - Use the `concat()` method to merge them into a new array.
// - Log both original arrays and the combined array in the console (as comments or output).

const furniture = ["table", "chair", "bed"];
const homeDecoration = ["flower pot", "indoor plants", "Toys", "Paintings"];

const totalItems = furniture.concat(homeDecoration);

console.log(furniture);
console.log(homeDecoration);
console.log(totalItems);