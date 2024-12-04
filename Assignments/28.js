var Car = /** @class */ (function () {
    // Constructor that initializes the object properties
    function Car(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", 15, 180);
// Accessing the properties of the Car instance
console.log("Car Name: ".concat(myCar.name));
console.log("Car Mileage: ".concat(myCar.mileage, " km/l"));
console.log("Car Max Speed: ".concat(myCar.max_speed, " km/h"));
