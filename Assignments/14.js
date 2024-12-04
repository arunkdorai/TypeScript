var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
var result = array1.map(function (row, i) { return row.map(function (val, j) { return val + array2[i][j]; }); });
console.log("Sum of 2 arrays:", result);
