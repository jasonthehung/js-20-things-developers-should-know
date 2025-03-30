// ====================================
// Constructor Functions in JavaScript
// ====================================
// A constructor function is a special type of function used to create objects.
// By convention, constructor function names start with a capital letter.

function Person(name) {
  this.name = name; // Assign instance-specific properties
}

// ====================================
// How Constructor Functions Work
// ====================================
// When you call a function with the "new" keyword:
// 1. A new object is created.
// 2. The `this` keyword is set to refer to the new object.
// 3. The prototype of the new object is set to the constructor function's prototype.
// 4. The function returns the new object (unless you explicitly return something else).

// Example Usage
const person1 = new Person("Alice");
const person2 = new Person("Bob");

console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob

// ====================================
// Common Mistake: Forgetting the "new" Keyword
// ====================================
// If you forget to use "new", `this` will refer to the global object (or undefined in strict mode).
// To avoid this, always use "new" with constructor functions.

function SuperElement(type, content) {
  this.el = document.createElement(type); // Create a DOM element
  this.el.innerText = content; // Set the text content
  document.body.append(this.el); // Append the element to the document

  // Add a click event listener
  this.el.addEventListener("click", () => {
    console.log(this.el); // Log the element when clicked
  });
}

// Example Usage: Creating multiple elements
const contents = ["Content A", "Content B", "Content C"];

const elements = contents.map((item) => new SuperElement("h1", item));
// Creates <h1> elements with "Content A", "Content B", and "Content C"
