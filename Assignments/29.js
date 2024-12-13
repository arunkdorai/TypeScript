"use strict";
function myFilter(myArray, callback) {
    // Calculate the sum of the array
    const sum = myArray.reduce((acc, num) => acc + num, 0);
    // Call the callback function to check if the sum is even or odd
    if (callback(sum)) {
        console.log(`Sum is even: ${sum}`);
    }
    else {
        console.log(`Sum is odd: ${sum}`);
    }
    // Return the sum
    return sum;
}
// Callback function to check if the number is even
function isEven(sum) {
    return sum % 2 === 0;
}
// Sample input
const inputArray = [1, 2, 3, 4, 5];
// Use the myFilter function
const result = myFilter(inputArray, isEven);
console.log("Final Sum:", result);
