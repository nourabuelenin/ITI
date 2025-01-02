class Book{
    constructor(title, author = undefined, isAvailable = true){
        this.title = title
        this.author = author
        this.isAvailable = isAvailable
    }

    borrow= () => {
        if(this.isAvailable){
            this.isAvailable = false;
        }
    }

    return= () => {
        if(!this.isAvailable){
            this.isAvailable = true;
        }
        // if(this.isAvailable){
        //     console.log('book was not borrowed')
        // }
        // else{
        //     this.isAvailable = true
        //     console.log("Book returned.");
        // }
    }
}

export default Book;