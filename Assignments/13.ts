import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a string: ", (str: string) => {
    const reversed = str.split('').reverse().join('');
    console.log(reversed === str ? "Palindrome" : "Not a palindrome");
    rl.close();
});
