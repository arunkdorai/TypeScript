var Matrix = /** @class */ (function () {
    function Matrix(size) {
        this.size = size;
        this.array = Array.from({ length: size }, function () {
            return Array.from({ length: size }, function () { return Math.floor(Math.random() * 10); });
        } // Simulated input
        );
    }
    Matrix.prototype.displayArray = function () {
        this.array.forEach(function (row) { return console.log(row.join('\t')); });
    };
    return Matrix;
}());
var matrix = new Matrix(3); // Example size
console.log("Matrix values:");
matrix.displayArray();
