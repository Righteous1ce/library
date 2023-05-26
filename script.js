


let myLibrary = [
    Title = 'Man',
    Author = 'person',
    pages = '13',
    Status = 'read'
];



function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function(){

        return `${this.title}` + " " + `${this.author}` + " " + `${this.pages}` + " " + `${this.status}`;


    }

}



function addBookToLibrary(title, author, pages, status){
    title = prompt("Title: ");
    author = prompt("Author: ");
    pages = prompt("pages: ");
    status = prompt("status: ");

    const addedBook = new Book(title, author, pages, status);
    myLibrary.push(addedBook);

}




console.log(myLibrary);