// Book array
const myLibrary = [new Book("Harry Potter","Rowling",400,false), new Book("Harry Potter","Rowling",300,false), new Book("Harry Potter","Rowling",500,false)];
// define a Book
function Book(name,author,pages,read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
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
    `<button class="delete" id=${'' + bookNum}>Delete</button>`;
    bookNum++;
    bookContainer.appendChild(div);
  }
} 
// open, close form and delete a book
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const deleteBooks = document.querySelectorAll(".delete");
showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  addBookToLibrary();
  displayBook();
  dialog.close();
  event.preventDefault();
});
document.querySelector('.bookContainer').addEventListener('click', function(event) {
  if (event.target.className === 'delete') {
    let index = Number(event.target.id);
    myLibrary.splice(index, 1);
    displayBook();
  }
});
displayBook();