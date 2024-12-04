import * as readline from "readline";

// Base Class: User
class User {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  borrowBook(book: string): void {
    console.log(`${this.name} borrowed the book: ${book}`);
  }
}

// Derived Class: RegularMember
class RegularMember extends User {
  private maxBorrowLimit: number = 2;

  constructor(name: string) {
    super(name);
  }

  calculateLateFees(daysLate: number): number {
    const feePerDay = 2;
    return daysLate * feePerDay;
  }

  borrowBook(book: string): void {
    console.log(
      `${this.name} (Regular Member) borrowed the book: ${book}. Limit: ${this.maxBorrowLimit}`
    );
  }
}

// Derived Class: PremiumMember
class PremiumMember extends User {
  private maxBorrowLimit: number = 5;

  constructor(name: string) {
    super(name);
  }

  calculateLateFees(daysLate: number): number {
    const feePerDay = 1;
    return daysLate * feePerDay;
  }

  borrowBook(book: string): void {
    console.log(
      `${this.name} (Premium Member) borrowed the book: ${book}. Limit: ${this.maxBorrowLimit}`
    );
  }
}

// Library Class
class Library {
  private books: string[] = ["Book A", "Book B", "Book C", "Book D"];

  listAvailableBooks(): void {
    console.log("Available Books:", this.books.join(", "));
  }

  lendBook(book: string, user: User): void {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      user.borrowBook(book);
    } else {
      console.log(`${book} is not available.`);
    }
  }
}

// Interactive Input Setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Main Function
async function main() {
  const library = new Library();

  rl.question("Enter your name: ", (name) => {
    rl.question(
      "Are you a Regular Member or Premium Member? (type 'regular' or 'premium'): ",
      (memberType) => {
        let user: User;
        if (memberType.toLowerCase() === "regular") {
          user = new RegularMember(name);
        } else {
          user = new PremiumMember(name);
        }

        library.listAvailableBooks();
        rl.question("Enter the book you want to borrow: ", (book) => {
          library.lendBook(book, user);

          rl.question(
            "Do you want to calculate late fees? (yes/no): ",
            (calculateFees) => {
              if (calculateFees.toLowerCase() === "yes") {
                rl.question(
                  "Enter the number of days late: ",
                  (daysLateStr) => {
                    const daysLate = parseInt(daysLateStr);
                    if (user instanceof RegularMember) {
                      console.log(
                        `Late Fees: $${user.calculateLateFees(daysLate)}`
                      );
                    } else if (user instanceof PremiumMember) {
                      console.log(
                        `Late Fees: $${user.calculateLateFees(daysLate)}`
                      );
                    }
                    rl.close();
                  }
                );
              } else {
                rl.close();
              }
            }
          );
        });
      }
    );
  });
}

main();
