import Book from './book.js';
import Library from './library.js';

const myLibrary = new Library('City Library');

const book1 = new Book('book1',"n", false)
const book2 = new Book('book2')
const book3 = new Book('book3')
const book4 = new Book('book4')

myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)
myLibrary.addBook(book4)

console.log(myLibrary);
myLibrary.listAvailableBooks()

// myLibrary.borrowBook(book1)
// myLibrary.listAvailableBooks()

// book1.borrow()
book1.return()
// book2.returnBook()
myLibrary.listAvailableBooks()
myLibrary.borrowBook("book2")

myLibrary.listAvailableBooks()
myLibrary.borrowBook("book2")

myLibrary.returnBook("book2")


