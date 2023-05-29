
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

        var cardContent =
            '<h2>' +
            book.title +
            '</h2>' +
            '<p><strong>Author:</strong> ' +
            book.author +
            '</p>' +
            '<p><strong>Page Count:</strong> ' +
            book.pages +
            '</p>' +
            '<p><strong>Reading Status:</strong> ' +
            book.status +
            '</p>' +
            '<button class="edit-btn" id="edit-btn-' + i + '">Edit</button>' +
            '<button class="delete-btn" id="delete-btn-' +
            i +
            '">Delete</button>';

        card.innerHTML = cardContent;
        cardContainer.appendChild(card);

        (function (index) {
            var deleteButton = card.querySelector('#delete-btn-' + index);
            deleteButton.addEventListener('click', function () {
                deleteBook(index);
            });
        })(i);

        var editButton = card.querySelector('#edit-btn-' + i);
        editButton.addEventListener('click', function () {
            var index = Array.from(cardContainer.querySelectorAll('.edit-btn')).indexOf(this);
            editReadingStatus(index);
        });
    }

    document.getElementById('bookForm').reset();
}


  ////////// DELETE BOOK \\\\\\\\\\
  
  function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayCard(event);
  }
  
  ////////// EDIT STATUS \\\\\\\\\\

  function editReadingStatus(index) {
    var newStatus = prompt('Enter the new reading status (Read, In Progress, To Be Read):');
  
   
    if (newStatus && ['Read', 'In Progress', 'To Be Read'].includes(newStatus)) {
      
      myLibrary[index].status = newStatus;
  
     
      var card = document.getElementsByClassName('card')[index];
      var statusElement = Array.from(card.getElementsByTagName('p')).find(function (element) {
        return element.textContent.includes('Reading Status:');
      });
  
      if (statusElement) {
        var statusTextNode = statusElement.childNodes[1];
        statusTextNode.textContent = ' ' + newStatus;
      }
    } else {
      alert('Invalid reading status. Please enter Read, In Progress, or To Be Read.');
    }
  }
  