// =================================
// Base Vehicle Constructor Function
// =================================
// The Vehicle constructor defines shared properties (type and speed)
// for all vehicles. It serves as the base class for other vehicle types.
function Vehicle(type, speed) {
  this.type = type;
  this.speed = speed;
}

// Adding methods via Prototype
// The getInfo method is added to Vehicle.prototype so it can be shared
// across all instances of Vehicle and its subclasses.
Vehicle.prototype.getInfo = function () {
  return `${this.type} is moving at ${this.speed} km/h.`;
};

// ================================================
// Car Constructor Function (inherits from Vehicle)
// ================================================
// The Car constructor extends the Vehicle constructor to include
// additional properties specific to cars, such as brand and fuelType.
function Car(brand, speed, fuelType) {
  Vehicle.call(this, "Car", speed); // Call the Vehicle constructor
  this.brand = brand;
  this.fuelType = fuelType;
}

// Inherit Vehicle prototype
// Set Car.prototype to inherit from Vehicle.prototype, allowing Car
// instances to access methods like getInfo.
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; // Reset the constructor reference to Car

// Adding Car-specific method
// The refuel method is unique to Car instances and provides functionality
// specific to cars, such as refueling with a specific fuel type.
Car.prototype.refuel = function () {
  return `${this.brand} car is refueling with ${this.fuelType}.`;
};

// =================================================
// Bike Constructor Function (inherits from Vehicle)
// =================================================
// The Bike constructor extends the Vehicle constructor to include
// additional properties specific to bikes, such as brand and helmet.
function Bike(brand, speed, helmet) {
  Vehicle.call(this, "Bike", speed); // Call the Vehicle constructor
  this.brand = brand;
  this.helmet = helmet;
}

// Inherit Vehicle prototype
// Set Bike.prototype to inherit from Vehicle.prototype, allowing Bike
// instances to access methods like getInfo.
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike; // Reset the constructor reference to Bike

// Adding Bike-specific method
// The wearHelmet method is unique to Bike instances and provides functionality
// specific to bikes, such as checking if a helmet is being worn.
Bike.prototype.wearHelmet = function () {
  return this.helmet
    ? `Wearing a helmet while riding ${this.brand} bike.`
    : `No helmet detected!`;
};

// ======================================
// Factory Function for Creating Vehicles
// ======================================
// The createVehicle function simplifies the creation of Car and Bike objects.
// It determines the type of vehicle and returns the appropriate instance.
function createVehicle(type, brand, speed, extra) {
  if (type === "Car") {
    return new Car(brand, speed, extra);
  } else if (type === "Bike") {
    return new Bike(brand, speed, extra);
  }
  return null; // Return null if the type is not recognized
}

// =============
// Example Usage
// =============
// Demonstrating the creation and usage of Car and Bike objects using the
// createVehicle factory function.

const myCar = createVehicle("Car", "Toyota", 120, "Petrol");
console.log(myCar.getInfo()); // Output: Car is moving at 120 km/h.
console.log(myCar.refuel()); // Output: Toyota car is refueling with Petrol.

const myBike = createVehicle("Bike", "Yamaha", 80, true);
console.log(myBike.getInfo()); // Output: Bike is moving at 80 km/h.
console.log(myBike.wearHelmet()); // Output: Wearing a helmet while riding Yamaha bike.
