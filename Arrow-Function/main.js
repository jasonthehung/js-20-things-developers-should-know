// ====================================
// Overview of Functions in JavaScript
// ====================================

// 1. Anonymous Function
// A function without a name, often used as a one-time function.
(function () {
  console.log("Anonymous function");
})();

// 2. Callback Function
// A function passed as an argument to another function.
// Often used for asynchronous operations like setTimeout or event listeners.
setTimeout(function () {
  console.log("Callback function");
}, 1000);

// 3. Named Function
// A function with a name, useful for reusability and debugging.
// Examples include factory functions, constructor functions, etc.
function namedFunction() {
  console.log("Named function");
}

// 4. Object Methods
// A function defined as a property of an object.
// These are often used to define behaviors for objects.
const obj = {
  method: function () {
    console.log("Object method");
  },
};
