var my_string = "1234"; // Declare my_string here so it is accessible in all blocks
try {
    console.log("Reversed string is:", my_string.split('').reverse().join(''));
}
catch (err) {
    console.error("Error:", err.message);
}
finally {
    console.log("Type of my_string is:", typeof my_string);
}
