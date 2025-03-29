// ====================================
// Example 1: Object Literals
// ====================================
const me = {
  talk() {
    console.log("Hello");
  },
};

const you = {
  name: "John",
  talk() {
    console.log("Hello");
  },
};

// Problem: The `talk` method is duplicated in both objects.
// Solution: Use inheritance to avoid duplication by creating a shared method.

// ====================================
// Example 2: Using Classes
// ====================================
class Person {
  talk() {
    console.log("Hello");
  }
}

// Creating instances of the Person class
const jason = new Person();
const john = new Person();

// Benefit: The `talk` method is shared across all instances of Person.
// We can now create as many Person instances as we want without duplicating the method.

// ====================================
// Example 3: Modifying Prototype Methods
// ====================================
Person.prototype.talk = function () {
  console.log("New Hello");
};

// Now, all instances of Person will use the updated `talk` method.

// ====================================
// Example 4: Adding Properties and Methods to a Class
// ====================================
class Person {
  constructor(name) {
    // Instance-specific property
    this.name = name;

    // Property method (unique to each instance)
    this.propertyTalk = () => {
      console.log("Property Talking");
    };
  }

  // Prototype method (shared across all instances)
  methodTalk() {
    console.log("Method Talking");
  }
}

// ====================================
// Example 5: Constructor Functions (Older Syntax)
// ====================================
function Person() {
  this.name = "Kevin"; // Instance-specific property
  this.age = 20; // Instance-specific property
}

// Adding methods to the prototype of the constructor function
Person.prototype.talk = function () {
  console.log("Talking...");
};
Person.prototype.eat = function () {
  console.log("Eating...");
};

// ====================================
// Example 6: Inheritance Using Classes
// ====================================
class SuperHero {
  fly() {
    console.log("Flying");
  }
}

class Person extends SuperHero {
  talk() {
    console.log("Hello");
  }
}

// ====================================
// Example 7: Pure Object Inheritance
// ====================================
const person = {
  talk() {
    return "Talking";
  },
};

// Approach 1: Using Object.create
const ross = Object.create(person);

// Approach 2: Using Object.setPrototypeOf
const heily = {};
Object.setPrototypeOf(heily, person);

// ====================================
// Summary
// ====================================
// - Use classes to avoid duplicating methods across objects.
// - Prototype methods are shared across instances, saving memory.
// - Property methods (defined in the constructor) are unique to each instance.
// - Constructor functions are an older way to create objects, but modern JavaScript prefers classes.
// - Inheritance can be achieved using classes or pure objects.
