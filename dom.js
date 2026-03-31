const myHeading = document.getElementById("my-heading");
const myHeading2 = document.getElementsByTagName("h1");
const heading = document.getElementsByClassName("heading");
const queryHeading = document.querySelector("#my-heading");
const queryHeadings = document.querySelectorAll("#my-heading");
const doming = document.querySelector("#dom-img");
console.log(myHeading);
const eventBtn = document.querySelector("#event-btn");
const signupForm = document.querySelector("#signup-form");
const KeyEvent = document.querySelector("#key-event");

function header() {
  Array.from(myHeading2).forEach(function (heading) {
    heading.innerText = "welcome to class";
    heading.style.color = "purple";
    heading.style.backgroundColor = "yellow";
  });
}

header();

heading.innerText = "Welcome to Dom";

// myHeading.textContent = "Welcome to the Dom";
console.log(queryHeading);

console.log(queryHeadings);

console.log(doming);

doming.src = "./images/tea5.jpg";

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

eventBtn.addEventListener("click", function () {
  Array.from(myHeading2).forEach(function (heading) {
    heading.innerText = "you clicked me";
    heading.style.color = "blue";
    heading.style.backgroundColor = "red";
  });
});

// eventBtn.addEventListener("dblclick", function () {
//   Array.from(myHeading2).forEach(function (heading) {
//     heading.innerText = "welcome to class";
//     heading.style.color = "purple";
//     heading.style.backgroundColor = "yellow";
//   });
// });

eventBtn.addEventListener("dblclick", header);

// KeyEvent.addEventListener("keyup", function () {
//     console.log(KeyboardEvent.value);
// });

// KeyEvent.addEventListener("keydown", function () {
//   console.log(KeyboardEvent.value);
// });

KeyEvent.addEventListener("input", function () {
  console.log(KeyEvent.value);
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const fullName = document.forms["signup"]["full-name"].value;
  const password = document.forms["signup"]["password"].value;
  const email = document.forms["signup"]["email"].value;

  console.log(
    ` full name: ${fullName} \n password: ${password} \n email: ${email}`,
  );
});
