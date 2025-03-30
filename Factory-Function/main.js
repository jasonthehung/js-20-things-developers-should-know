// ====================================
// Factory Functions in JavaScript
// ====================================
// A factory function is a function that creates and returns an object.
// It helps avoid duplicating logic and provides a clean way to create multiple objects with similar behavior.

function factory(name) {
  return {
    name, // ES6 shorthand for `name: name`
    talk() {
      return `Hello, I'm ${name}`; // Uses closure to access `name`
    },
  };
}

// ====================================
// Why Use Factory Functions?
// ====================================
// 1. Simple: It's just a function.
// 2. No Duplicates: Reuse the same logic to create multiple objects.
// 3. Data Privacy: Uses closures to encapsulate private data.

// Example Usage
const person1 = factory("Alice");
const person2 = factory("Bob");

console.log(person1.talk()); // Output: Hello, I'm Alice
console.log(person2.talk()); // Output: Hello, I'm Bob

// ====================================
// More Examples: DOM Element Factory
// ====================================
// A factory function to create and manage DOM elements
function createElement(type, text, color) {
  const el = document.createElement(type); // Create a DOM element
  el.innerText = text; // Set the text content
  el.style.color = color; // Set the text color
  document.body.append(el); // Append the element to the document

  return {
    el, // Expose the element
    setText(newText) {
      el.innerText = newText; // Update the text content
    },
    setColor(newColor) {
      el.style.color = newColor; // Update the text color
    },
  };
}

// Example Usage
const h1 = createElement("h1", "This is an H1", "red");
const p = createElement("p", "This is a paragraph", "blue");

// Update the elements
h1.setText("Updated H1 Text");
h1.setColor("green");

p.setText("Updated Paragraph Text");
p.setColor("purple");
