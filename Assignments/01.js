"use strict";
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter a character: ", (char) => {
    console.log(`You entered: ${char}`);
    rl.close();
});
