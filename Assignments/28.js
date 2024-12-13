"use strict";
class Car {
    // Constructor that initializes the object properties
    constructor(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
}
// Create an instance of the Car class
const myCar = new Car("Toyota", 15, 180);
// Accessing the properties of the Car instance
console.log(`Car Name: ${myCar.name}`);
console.log(`Car Mileage: ${myCar.mileage} km/l`);
console.log(`Car Max Speed: ${myCar.max_speed} km/h`);
