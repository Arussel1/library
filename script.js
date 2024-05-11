class Book {
  constructor(name, author, pages, read) {
      this._name = name;
      this._author = author;
      this._pages = pages;
      this._read = read;
  }

  // Getter and setter for name
  get name() {
      return this._name;
  }

  set name(value) {
      this._name = value;
  }

  // Getter and setter for author
  get author() {
      return this._author;
  }

  set author(value) {
      this._author = value;
  }

  // Getter and setter for pages
  get pages() {
      return this._pages;
  }

  set pages(value) {
      this._pages = value;
  }

  // Getter and setter for read status
  get read() {
      return this._read;
  }

  set read(value) {
      this._read = value;
  }

  // Method to toggle read status
  readToggle() {
      this.read = !this.read;
  }
}

// Book array
const myLibrary = [new Book("Harry Potter","J.K.Rowling",400,false),];

// function to add and display book
function addBookToLibrary() {
  let bookName = document.forms["addBook"].name.value;
  let author = document.forms["addBook"].author.value;
  let page = parseInt(document.forms["addBook"].page.value);
  let read = document.forms["addBook"].read.checked;
  myLibrary.push(new Book(bookName,author,page,read));
}
function displayBook() {
  let bookNum = 0;
  let bookContainer = document.querySelector(".bookContainer");
  bookContainer.innerHTML = '';
  for (let book of myLibrary) {
      let div = document.createElement("div");
      div.className = "book";
      div.innerHTML = 
      `<p>Name: ${book.name}</p>` +  // uses getter
      `<p>Author: ${book.author}</p>` + // uses getter
      `<p>Pages: ${book.pages}</p>` +  // uses getter
      `<p>Read status: ${book.read}</p>` + // uses getter
      `<button class="readToggle" data-index="${bookNum}" >Change status</button>` +
      `<button class="delete" data-index="${bookNum}">Delete</button>`;
      bookNum++;
      bookContainer.appendChild(div);
  }
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const form = document.forms["addBook"];
// Dialog opening
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Dialog closing
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop the form from submitting normally
  addBookToLibrary();
  displayBook();
  dialog.close();
});

// Event listener for deleting and chaging read status
document.querySelector('.bookContainer').addEventListener('click', function(event) {
  const index = Number(event.target.getAttribute('data-index'));
  if (event.target.className === 'delete') {
    myLibrary.splice(index, 1);
  }else if(event.target.className == 'readToggle'){
    myLibrary[index].readToggle();
  }
  displayBook();
});

displayBook();