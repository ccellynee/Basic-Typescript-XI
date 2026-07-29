/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type book = {
    ISBN: string;
    title: string;
    author: string;
    totalPages: number;
    category: string;
    isAvailable: boolean;
}

const book1: book = {
    ISBN: "9786021234567",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    totalPages: 223,
    category: "Fantasy",
    isAvailable: true,
}

const book2: book = {
    ISBN: "9786027654321",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    totalPages: 310,
    category: "Fantasy",
    isAvailable: false,
};

const book3: book = {
    ISBN: "9786239876543",
    title: "Atomic Habits",
    author: "James Clear",
    totalPages: 320,
    category: "Self Improvement",
    isAvailable: true,
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);