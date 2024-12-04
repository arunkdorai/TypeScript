const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
const result = array1.map((row, i) => row.map((val, j) => val + array2[i][j]));
console.log("Sum of 2 arrays:", result);
