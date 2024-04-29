const myLibrary = [new Book("Harry Potter","Rowling",400,false), new Book("Harry Potter","Rowling",300,false), new Book("Harry Potter","Rowling",500,false)];

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

function displayBook(lib){
  let bookContainer = document.querySelector(".bookContainer");
  for(let book of lib){
    let div = document.createElement("div");
    div.innerHTML = 
    `<p>${book.name}<\p>` +   `<p>${book.author}<\p>` + `<p>${book.pages}<\p>`  +`<p>${book.read}<\p>` ;
    bookContainer.appendChild(div);
  }
} 
displayBook(myLibrary);