function getArray(size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            row.push(Math.floor(Math.random() * 10)); // Simulated input
        }
        arr.push(row);
    }
    return arr;
}
function addArray(arr1, arr2) {
    return arr1.map(function (row, i) { return row.map(function (val, j) { return val + arr2[i][j]; }); });
}
function displayArray(arr) {
    arr.forEach(function (row) { return console.log(row.join('\t')); });
}
var size = 3; // Example size
var array1 = getArray(size);
var array2 = getArray(size);
console.log("Array 1:");
displayArray(array1);
console.log("Array 2:");
displayArray(array2);
console.log("Sum of Arrays:");
displayArray(addArray(array1, array2));
