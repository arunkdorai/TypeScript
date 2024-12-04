function getArray(size: number): number[][] {
    const arr = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(Math.floor(Math.random() * 10)); // Simulated input
        }
        arr.push(row);
    }
    return arr;
}

function addArray(arr1: number[][], arr2: number[][]): number[][] {
    return arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));
}

function displayArray(arr: number[][]): void {
    arr.forEach(row => console.log(row.join('\t')));
}

const size = 3; // Example size
const array1 = getArray(size);
const array2 = getArray(size);
console.log("Array 1:");
displayArray(array1);
console.log("Array 2:");
displayArray(array2);
console.log("Sum of Arrays:");
displayArray(addArray(array1, array2));
