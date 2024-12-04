"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.circle = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };
    Area.prototype.square = function (side) {
        return Math.pow(side, 2);
    };
    Area.prototype.rectangle = function (length, breadth) {
        return length * breadth;
    };
    Area.prototype.triangle = function (base, height) {
        return 0.5 * base * height;
    };
    return Area;
}());
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyClass.prototype.main = function () {
        var _this = this;
        rl.question("Enter your choice (1: Circle, 2: Square, 3: Rectangle, 4: Triangle): ", function (choice) {
            switch (Number(choice)) {
                case 1:
                    rl.question("Enter radius: ", function (radius) {
                        console.log("Area of Circle:", _this.circle(Number(radius)));
                        rl.close();
                    });
                    break;
                case 2:
                    rl.question("Enter side length: ", function (side) {
                        console.log("Area of Square:", _this.square(Number(side)));
                        rl.close();
                    });
                    break;
                case 3:
                    rl.question("Enter length and breadth (space-separated): ", function (values) {
                        var _a = values.split(' ').map(Number), length = _a[0], breadth = _a[1];
                        console.log("Area of Rectangle:", _this.rectangle(length, breadth));
                        rl.close();
                    });
                    break;
                case 4:
                    rl.question("Enter base and height (space-separated): ", function (values) {
                        var _a = values.split(' ').map(Number), base = _a[0], height = _a[1];
                        console.log("Area of Triangle:", _this.triangle(base, height));
                        rl.close();
                    });
                    break;
                default:
                    console.log("Invalid choice!");
                    rl.close();
            }
        });
    };
    return MyClass;
}(Area));
var myClass = new MyClass();
myClass.main();
