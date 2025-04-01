// ====================================
// Understanding "this" in JavaScript
// ====================================
// The "this" keyword refers to the object that is executing the current function.
// It is dynamic and depends on how the function is called.

// Example: "this" refers to the object on the left side of the function invocation.
function talk() {
  return `I'm ${this.name}`;
}

const jason = {
  name: "Jason",
  talk, // "this" will refer to the `jason` object when `jason.talk()` is called.
};

const kevin = {
  name: "Kevin",
  talk, // "this" will refer to the `kevin` object when `kevin.talk()` is called.
};

// ====================================
// Dynamic Nature of "this"
// ====================================
// "this" changes depending on the caller of the function.

const me = {
  name: "Me",
};

// bind: Creates a new function with "this" permanently set to the specified object.
const talkMe = talk.bind(me); // "this" is permanently bound to `me`.
console.log(talkMe()); // Output: I'm Me

// call: Invokes the function immediately with "this" set to the specified object.
console.log(talk.call(me)); // Output: I'm Me

// ====================================
// Passing Arguments with call and apply
// ====================================
// call: Pass arguments one by one.
function introduce(greeting) {
  return `${greeting}, I'm ${this.name}`;
}

console.log(introduce.call(jason, "Hello")); // Output: Hello, I'm Jason

// apply: Pass arguments as an array.
console.log(introduce.apply(jason, ["Hello"])); // Output: Hello, I'm Jason

// ====================================
// "this" in Constructor Functions
// ====================================
// In a constructor function, "this" automatically refers to the new object being created.

function Person(name) {
  this.name = name; // "this" refers to the new object.
  this.talk = function () {
    console.log(this); // "this" refers to the current instance of Person.
  };

  // ====================================
  // "this" in Callback Functions
  // ====================================
  // Callback functions often run in a different context, so "this" may not refer to the expected object.

  // Example: "this" in a regular function inside setTimeout refers to the global object (or undefined in strict mode).
  setTimeout(function () {
    console.log(this); // Output: global object or undefined
  }, 1000);

  // Fix 1: Use bind to explicitly bind "this" to the callback function.
  setTimeout(
    function () {
      console.log(this); // Output: Person instance
    }.bind(this),
    1000
  );

  // Fix 2: Use an arrow function, which does not have its own "this".
  // Arrow functions inherit "this" from their surrounding context.
  setTimeout(() => {
    console.log(this); // Output: Person instance
  }, 1000);
}

// Example Usage
const jacky = new Person("Jacky"); // Creates a new Person instance
jacky.talk(); // Output: Person { name: 'Jacky', talk: [Function] }
