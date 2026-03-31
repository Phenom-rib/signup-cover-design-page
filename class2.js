const bookForm = document.querySelector("#book-form");
const bookTitle = document.querySelector("#book-title");
const bookCategory = document.querySelector("#book-category");
const bookList = document.querySelector("#book-list");
const books = JSON.parse(localStorage.getItem("books")) || [];

// const books = [];

function renderBooks() {
  bookList.innerHTML = "";
  localStorage.setItem("books", JSON.stringify(books));

  books.forEach(function (book, id) {
    console.log(book);
    const bookLi = document.createElement("li");
    bookLi.classList.add("list-item");
    bookLi.innerHTML = `
        <p>${id + 1}</p>
        <p>${book.title}</p>
        <p>${book.category}</p>
        <button onclick="delBook(${id})">Delete Book</button>
        `;
    bookList.appendChild(bookLi);
  });
}
window.addEventListener("DOMContentLoaded", function () {
  renderBooks();
});
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  books.push({
    title: bookTitle.value,
    category: bookCategory.value,
  });
  console.log(books);
  // localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
  bookTitle.value = "";
  bookCategory.value = "";
});

function delBook(id) {
  books.splice(id, 1);
  console.log(books);
  renderBooks();
  [[["p"]]];
}
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  books.push({
    title: bookTitle.value,
    category: bookCategory.value,
  });
  console.log(books);
  // localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
});
