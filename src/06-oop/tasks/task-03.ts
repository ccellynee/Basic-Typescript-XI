/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class Book {
    private status: string;

    constructor(
        public isbn: string,
        public title: string,
        public author: string,
        public totalPages: number
    ) {
        this.status = "available";
    }

    borrow(): void {
        if (this.status === "available") {
            this.status = "borrowed";
            console.log(`${this.title} berhasil dipinjam.`);
        } else {
            console.log(`${this.title} sedang dipinjam.`);
        }
    }

    returnBook(): void {
        if (this.status === "borrowed") {
            this.status = "available";
            console.log(`${this.title} berhasil dikembalikan.`);
        } else {
            console.log(`${this.title} belum dipinjam.`);
        }
    }

    showInfo(): void {
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Total Pages: ${this.totalPages}`);
        console.log(`Status: ${this.status}`);
    }

    isAvailable(): boolean {
        return this.status === "available";
    }
}

const book1 = new Book(
    "ISBN001",
    "Laskar Pelangi",
    "Andrea Hirata",
    529
);

const book2 = new Book(
    "ISBN002",
    "Bumi",
    "Tere Liye",
    440
);

book1.showInfo();
console.log("Available:", book1.isAvailable());

book1.borrow();
console.log("Available:", book1.isAvailable());

book1.borrow();

book1.returnBook();
console.log("Available:", book1.isAvailable());

book2.showInfo();
book2.borrow();