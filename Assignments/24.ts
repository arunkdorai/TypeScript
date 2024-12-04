import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

class Area {
    circle(radius: number): number {
        return Math.PI * radius ** 2;
    }
    square(side: number): number {
        return side ** 2;
    }
    rectangle(length: number, breadth: number): number {
        return length * breadth;
    }
    triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main(): void {
        rl.question("Enter your choice (1: Circle, 2: Square, 3: Rectangle, 4: Triangle): ", (choice: string) => {
            switch (Number(choice)) {
                case 1:
                    rl.question("Enter radius: ", (radius: string) => {
                        console.log("Area of Circle:", this.circle(Number(radius)));
                        rl.close();
                    });
                    break;
                case 2:
                    rl.question("Enter side length: ", (side: string) => {
                        console.log("Area of Square:", this.square(Number(side)));
                        rl.close();
                    });
                    break;
                case 3:
                    rl.question("Enter length and breadth (space-separated): ", (values: string) => {
                        const [length, breadth] = values.split(' ').map(Number);
                        console.log("Area of Rectangle:", this.rectangle(length, breadth));
                        rl.close();
                    });
                    break;
                case 4:
                    rl.question("Enter base and height (space-separated): ", (values: string) => {
                        const [base, height] = values.split(' ').map(Number);
                        console.log("Area of Triangle:", this.triangle(base, height));
                        rl.close();
                    });
                    break;
                default:
                    console.log("Invalid choice!");
                    rl.close();
            }
        });
    }
}

const myClass = new MyClass();
myClass.main();
