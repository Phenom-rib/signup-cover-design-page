// const bookForm = document.querySelector("#book-form");
// const bookTitle = document.querySelector("#book-title");
// const bookPrice = document.querySelector("#book-price");
// const bookAuthor = document.querySelector("#book-author");
// const bookList = document.querySelector("#book-list");

// const books = [];

// bookForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   books.push({
//     title: bookTitle.value,
//     price: bookPrice.value,
//   });

//   console.log(books);
//   bookList.innerHTML = "";

//   books.forEach(function (book, id) {
//     const bookLi = document.createElement("li");
//     bookLi.innerHTML = `
//    <p>${id + 1}</p>
//    <p>${book.title}</p>
//     //  <p>${id + 1} ${book.title}</p>

//     `;
//     bookList.appendChild(bookLi);
//   });

//   bookTitle.value = "";
//   bookPrice.value = "";
// });

const form = document.getElementById("form1");
const taskNameInput = document.getElementById("task-name");
const categorySelect = document.getElementById("todo-category");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskName = taskNameInput.value;
  const category = categorySelect.value;
  const categoryText = categorySelect.options[categorySelect.selectedIndex].text;

  if (taskName.trim() === "") return;

  // Create list item
  const li = document.createElement("li");

  // Create task content
  const taskContent = document.createElement("span");
  taskContent.textContent = `${taskName} - ${categoryText || "No Category"}`;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append content and button to list item
  li.appendChild(taskContent);
  li.appendChild(deleteBtn);

  // Add to todo list
  todoList.appendChild(li);

  // Clear inputs
  taskNameInput.value = "";
  categorySelect.value = "";
});
