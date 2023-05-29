
let myLibrary = [
    
];



function book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function(){

        return `${this.title}` + " " + `${this.author}` + " " + `${this.pages}` + " " + `${this.status}`;


    }

}

////////// ADD BOOK TO THE ARRAY \\\\\\\\\\

function addBookToLibrary(title, author, pages, status){
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var status = document.querySelector('input[name="form-status"]:checked').value;

    const addedBook = new book(title, author, pages, status);
    myLibrary.push(addedBook);

    displayCard(event);

}


////////// CARD DISPLAY \\\\\\\\\\

function displayCard(event) {
    event.preventDefault();
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    for (var i = 0; i < myLibrary.length; i++) {
        var book = myLibrary[i];

        var card = document.createElement('div');
        card.className = 'card';

        var cardContent = '<h2>' + book.title + '</h2>' +
            '<p><strong>Author:</strong> ' + book.author + '</p>' +
            '<p><strong>Page Count:</strong> ' + book.pages + '</p>' +
            '<p><strong>Reading Status:</strong> ' + book.status + '</p>';

        card.innerHTML = cardContent;
        cardContainer.appendChild(card);
    }

    document.getElementById('bookForm').reset();
}

