class Matrix {
    size: number;
    array: number[][];

    constructor(size: number) {
        this.size = size;
        this.array = Array.from({ length: size }, () => 
            Array.from({ length: size }, () => Math.floor(Math.random() * 10)) // Simulated input
        );
    }

    displayArray(): void {
        this.array.forEach(row => console.log(row.join('\t')));
    }
}

const matrix = new Matrix(3); // Example size
console.log("Matrix values:");
matrix.displayArray();
