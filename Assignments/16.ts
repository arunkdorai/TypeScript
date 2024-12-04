import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a number: ", (num: string) => {
    const n = Number(num);
    const isPrime = n > 1 && Array.from({ length: n - 2 }, (_, i) => i + 2).every(div => n % div !== 0);
    console.log(isPrime ? "Prime number" : "Not a prime number");
    rl.close();
});
