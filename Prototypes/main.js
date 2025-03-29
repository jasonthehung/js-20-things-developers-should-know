// ====================================
// Creating Objects in JavaScript
// ====================================
// JavaScript provides multiple ways to create objects:
const objLiteral = {}; // Using object literal
const objNew = new Object(); // Using the 'new' keyword
const objCreate = Object.create({}); // Using Object.create

// Each method creates an object, but they differ in syntax and use cases.

// ====================================
// Understanding the Prototype Chain
// ====================================
// When you try to access a property or method on an object:
// 1. JavaScript first looks for it in the object itself.
// 2. If it doesn’t find it, it looks up the prototype chain.
// 3. This continues until it reaches the top of the chain (null).

// Example: If `me` doesn't have a property, JavaScript checks `me.__proto__`.

// ====================================
// Prototypes and Constructor Functions
// ====================================
// A prototype is a property of a constructor function.
// It contains methods and properties that will be inherited by all instances of that constructor.

function Person(name) {
  this.name = name; // Instance-specific property
}

const me = new Person("Kevin"); // Create an instance of Person

// Accessing the prototype of the constructor function
console.log(Person.prototype); // The prototype object

// Accessing the prototype of the instance
console.log(me.prototype); // undefined (only functions have a prototype property)

// ====================================
// The __proto__ Property
// ====================================
// Every object in JavaScript has a `__proto__` property.
// It points to the parent object that the current object inherits from.

console.log(me.__proto__ === Person.prototype); // true

// ====================================
// Key Differences Between __proto__ and prototype
// ====================================
// - `__proto__` is accessed from the instance.
// - `prototype` is accessed from the constructor function.
// - `__proto__` is the prototype of the instance.
// - `prototype` is the prototype of the constructor function.

// In summary:
// - `Person.prototype` is the shared blueprint for all instances of `Person`.
// - `me.__proto__` points to `Person.prototype`, enabling inheritance.
