// define a Book constructor
function Book(name,author,pages,read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Book array
const myLibrary = [new Book("Harry Potter","Rowling",400,false), 
                   new Book("Harry Potter","Rowling",300,false), 
                   new Book("Harry Potter","Rowling",500,false)];

// Add prototype to change read status
Book.prototype.readToggle = function() {
  this.read =  !(this.read);
}

// function to add and display book
function addBookToLibrary() {
  let bookName = document.forms["addBook"].name.value;
  let author = document.forms["addBook"].author.value;
  let page = parseInt(document.forms["addBook"].page.value);
  let read = document.forms["addBook"].read.value == true;
  myLibrary.push(new Book(bookName,author,page,read));
}
function displayBook(){
  let bookNum = 0;
  let bookContainer = document.querySelector(".bookContainer");
  bookContainer.innerHTML = '';
  for(let book of myLibrary){
    let div = document.createElement("div");
    div.innerHTML = 
    `<p>${book.name}</p>` +  
    `<p>${book.author}</p>` + 
    `<p>${book.pages}</p>`  +
    `<p>${book.read}</p>` +
    `<button class="readToggle" data-index="${bookNum}" >Change status</button>` +
    `<button class="delete" data-index="${bookNum}">Delete</button>`;
    bookNum++;
    bookContainer.appendChild(div);
  }
} 

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Dialog opening
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Dialog closing
closeButton.addEventListener("click", () => {
  addBookToLibrary();
  displayBook();
  dialog.close();
  event.preventDefault();
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