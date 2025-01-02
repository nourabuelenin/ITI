import Book from './book.js';

class Library {

    constructor(name){
        this.name = name
        this.books = []
    }

    addBook =(name)=>{
        this.books.push(name)
    }
    
    listAvailableBooks= () => {
        const availableBooks = this.books.filter(book => book.isAvailable)
        console.log(availableBooks);  
    }

    borrowBook= (name) => {
        const book = this.books.find(book => book.title === name);
        if(!book.isAvailable){
            console.log('book is already borrowed')
        }
        else{
            book.borrow()
            console.log("Book borrowed.");
        }
    }

    returnBook =(name)=>{
        const book = this.books.find(book => book.title === name);

        if(book.isAvailable){
            console.log('book was not borrowed')
        }
        else{
            book.return()
            console.log("Book returned.");
        }
    }

}
export default Library


    ///أنا مش فاهمه حضرتك عايزنا نعمل الfunction زي borrowBook ,returnBook ولا
