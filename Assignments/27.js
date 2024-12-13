"use strict";
function checkHeight(my_height) {
    if (isNaN(my_height))
        throw new Error("notANumberError");
    if (my_height > 50)
        throw new Error("hugeHeightError");
    if (my_height < 1)
        throw new Error("tinyHeightError");
    console.log(my_height);
}
try {
    // Sample input: using a string "seven"
    checkHeight("seven"); // This will throw a "notANumberError"
}
catch (err) {
    console.error(err.message); // Prints the error message
}
try {
    // Sample input: using a number greater than 50
    checkHeight(77); // This will throw a "hugeHeightError"
}
catch (err) {
    console.error(err.message); // Prints the error message
}
try {
    // Sample input: using a number less than 1
    checkHeight(0); // This will throw a "tinyHeightError"
}
catch (err) {
    console.error(err.message); // Prints the error message
}
try {
    // Sample input: using a valid height
    checkHeight(8); // This will print the value 8
}
catch (err) {
    console.error(err.message); // This will not be reached
}
