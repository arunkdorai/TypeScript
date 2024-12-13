"use strict";
class Matrix {
    constructor(size) {
        this.size = size;
        this.array = Array.from({ length: size }, () => Array.from({ length: size }, () => Math.floor(Math.random() * 10)) // Simulated input
        );
    }
    displayArray() {
        this.array.forEach(row => console.log(row.join('\t')));
    }
}
const matrix = new Matrix(3); // Example size
console.log("Matrix values:");
matrix.displayArray();
