// //  alert("welcome to javascript class");
// // prompt("what is your name");

// // ----------------------------VARIABLE DECLARATION--------------------------------
// let a;
// var b;
// const c = 30;

// a = 50;
// var b = 60;

// console.log(a);
// console.log(b);
// console.log(c);

// // ----------------DATA TYPES-------------------------------
// let fullName = "Jhon Doe";
// let full_name;

// let rainy = true;
// console.log(rainy);

// let f = null;
// console.log(f);

// console.log(typeof fullName);
// console.log(typeof rainy);
// console.log(typeof a);
// console.log(typeof f);

// // -----------------------------ARITIMETIC OPERATION----------------------------------
// let r = 25;
// let s = "5";
// let u = 5;

// console.log(typeof r);
// console.log(typeof s);

// // -------------------------------SUBTRACTION---------------------------------------------
// console.log(r - s);
// console.log(r - u);

// // ---------------------MULTIPLICATION--------------------------------------------------------
// console.log(r * s);
// console.log(r * u);

// // ----------------------------------DIVISION-----------------------------
// console.log(r / s);
// console.log(r / u);

// // ---------------------------------ADDITION-------------------------------
// console.log(r + s);
// console.log(r + u);

// let j = 80;
// j = j + 5;
// j += 5;

// j -= 20;

// j *= 2;
// j %= 4;

// j++;

// console.log(j);

// // ---------------------------LOGICAL OPERATIONS------------------------------
// // -----------------------------OR---------------------------
// let h = true || false;
// let m = false || true;
// let n = true || true;
// let v = false || false;

// console.log(h);
// console.log(m);
// console.log(n);
// console.log(v);

// // -------------------------AND----------------------
// let g = true && false;
// b = false && true;
// let e = true && true;
// let d = false;

// console.log(g, b, e, d);

// g = !true;
// console.log(g);

// y = "8";
// d = 8;

// console.log(y == d);
// console.log(y === d);

// console.log(a >= 3);
// console.log(b <= 7);

// let ans = 5 > 3 || (4 < 6 && 4 > 9);

// console.log(ans);

// if (a > b) {
//   console.log("first number is greater");
// } else {
//   console.log("second number is greater");
// }

// // const weather = prompt(
// //   "what is the weather condition? choose rainy or sunny  ",
// // );

// // const score = prompt("enter your score");
// // if (score <= 29) {
// //   alert("your score is F");
// // } else if (score <= 39) {
// //   alert("your score is E");
// // } else if (score <= 49) {
// //   alert("Your score is D");
// // } else if (score <= 59) {
// //   alert("your score is C");
// // } else if (score <= 69) {
// //   alert("your score is B");
// // } else if (score >= 70) {
// //   alert("Your result is A");
// // } else {
// //   alert("wrong input");
// // }

// const math = 50;
// const eng = 70;
// const sci = 90;

// const average = (math + eng + sci) / 3;
// const choice = Number(
//   prompt(
//     "what operation do you want to do? put the number \n 1. Total Score \n 2. Average score \n 3.calculate the grade \n 4. Exit application",
//   ),
// );
// switch (choice) {
//   case 1:
//     const totalScore = math + eng + sci;
//     console.log("Studebt got a total scoe of" + " " + totalScore);
//     break;
//   case 2:
//     console.log("Students got an average of" + " " + average);
//     break;
//   case 3:
//     if (average <= 29) {
//       console.log("your score is F");
//     } else if (average <= 39) {
//       console.log("your score is E");
//     } else if (average <= 49) {
//       console.log("Your score is D");
//     } else if (average <= 59) {
//       console.log("your score is C");
//     } else if (average <= 69) {
//       console.log("your score is B");
//     } else if (average >= 70) {
//       console.log("Your result is A");
//     } else {
//       console.log("wrong input");
//     }
//     break;
//   case 4:
//     console.log("Thank you for using our application");
//     break;

//   default:
//     console.log("please put in the right option");
//     break;
// }

// // three product , three prices , first choice-view any of te price of the action,

// // function
// function greetUser(user) {
//   alert(`welcome to class ${user}`);
// }

// greetUser("Kelvin");

// function grretUserWithTime(user) {
//   const time = new Date();
//   if (time.getHours() < 12) {
//     alert(` Good Morning ${user}`);
//   } else if (time.getHours() >= 12 && time.getHours < 15) {
//     alert(`Good afgternoon ${user}`);
//   } else if (time.getHours() >= 16) {
//     alert(`Good evening ${user}`);
//   }
//   console.log(time.getHours());
// }

// // USING FUNCTION ADD TEO NUIMBERS TOGETHER

// function sum(number1, number2) {
//   console.log(number1 + number2);
// }
// sum(100, 200);

// function addNum(a, b) {
//   console.log(a + b);
// }

// addNum(7, 8);
// addNum(30, 4);

// const person = {
//   firstName: "James",
//   lastName: "Eze",
//   gender: "Male",
//   fullName(newLastName) {
//     return `${this.firstName} ${newLastName}`;
//   },
// };

// // console.log(person["firstName"])
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName("Okoro"));

// //  write a function that takes in a number multiple of 2 or 6 the number qualifies else disqualified

// function multiplesOf2and6() {
//   let number = Number(
//     prompt("Enter a number that is multiple of either 4 or 6"),
//   );
//   if (number % 4 == 0 || number % 6 == 0) {
//     console.log("the number you enterd is either a multiple of '4' or '6' ");
//   } else {
//     console.log(
//       " The number you entered is not a mutiple of either '4' or '6' ",
//     );
//   }
//   return;
// }

// multiplesOf2and6();

// // rock scissors papper

// let usersChoice = prompt(
//   "Select from the following \n 1. Rock  \n 2. Scissors \n 3. Paper",
// );
// let random = Math.floor(Math.random() * 3);
// let choices = ["Rock", "Paper", "Scissors"];
// let computerChoice = choices[random];

// if (
//   (computerChoice == "Scissors" && usersChoice == "Paper") ||
//   (computerChoice == "Rock" && usersChoice == "Scissors") ||
//   (computerChoice == "Paper" && usersChoice == "Rock")
// ) {
//   alert(
//     `player won. computer choose ${computerChoice} User choose ${usersChoice} `,
//   );
// } else if (computerChoice == usersChoice) {
//   alert(`Draw. computer chose ${computerChoice} user chose ${usersChoice}`);
// } else {
//   alert(
//     `Computer won. computer chose ${computerChoice} user chose ${usersChoice}`,
//   );
// }

// using math.random
// [4:45 pm, 11/03/2026] SO-OMA❤️✨: chosse a no between 0-2,  let random choice = math.random choice, multiply by 3, if choice = 0 let computer choice = rock, if choice = 1 let computer choice = scissors,

// class-work

// const items = ["rock", "paper", "scissors"];

// const userChoice =
//   items[
//     Number(
//       prompt(
//         "Select any items using numbers 1, 2, 3, \n 1. rock \n 2. paper \n 3. scissors",
//       ),
//     ) - 1
//   ];

// const randomChoice = Math.floor(Math.random() * 3);

// // console.log(randomChoice);
// const compChoice = items[randomChoice];

// console.log(compChoice);

// if (
//   (userChoice == "rock" && compChoice == "scissors") ||
//   (userChoice == "paper" && compChoice == "rock") ||
//   (userChoice == "scissors" && compChoice == "paper")
// ) {
//   console.log(
//     `user chose ${userChoice}, computer chose ${compChoice}. computer won`,
//   );
// } else if (
//   (compChoice == "rock" && userChoice == "scissors") ||
//   (compChoice == "paper" && userChoice == "rock") ||
//   (compChoice == "scissors" && userChoice == "paper")
// ) {
//   console.log(
//     `user chose ${userChoice}, computer chose ${compChoice}. user won`,
//   );
// } else {
//   console.log(
//     `user chose ${userChoice}, computer chose ${compChoice}. Nobody wins`,
//   );
// }

// console.log(items.length);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const foods = ["yam", "beans", "rice"];
// console.log(fruits.at(0));

// console.log(fruits.join("@"));
// console.log(fruits);

// console.log(fruits.pop());
// console.log(fruits);

// console.log(fruits.push("Lemon"));
// console.log(fruits);

// console.log(fruits.shift());
// console.log(fruits);

// console.log(fruits.unshift("Pineapple"));
// console.log(fruits);

// console.log(fruits[0]);
// fruits[0] = "Pear";

// console.log(fruits);

// console.log(fruits.concat(foods, [1, 2, 3]));

// fruits.splice(2, 1, "Lemon", "kiwi");
// // console.log(fruits.splice(3));
// // console.log(fruits);

// const fruit = fruits.slice(1);
// console.log(fruits);

// console.log(fruit);

// // BOOK MANAGEMENT APP
// const books = ["Things fall apart", "Think Big", "In Biafra Africa died"];

// const choice = Number(
//   prompt(
//     "A Book management app that those the following\n 1. create a book array with at least two books \n 2.add a new book to the array using propmpt \n 3. Remove a book from the array\n 4. exit he application ",
//   ),
// );
// switch (choice) {
//   case 1:
//     // books = ["Things fall apart", "Think Big", "In Biafra Africa died"];
//     alert(books);
//     break;

//   case 2:
//     let newBook = prompt("Enter the new book of your choice");
//     books.push(newBook);
//     alert(`Your updated book list ${books}`);
//     break;
//   case 3:
//     let removedBook = prompt("Enter the book to be removed ");
//     // allBooks = `${books} + ${newBook}`;
//     // alert(`${books} + ${newBook}`);
//     books.splice(1);

//     break;
//   default:
//     break;
// }

// const books = ["chike", "drifted", "gifted"];

// const choice = Number(
//   prompt(
//     "What do you want to do? \n 1. Add book \n 2 Remove a bookn \n 3. Edit book name \n 4. exit application",
//   ),
// );

// if (choice == 1) {
//   const newBook = prompt("What book do you want to add");
//   books.push(newBook);
//   console.log(books);
// } else if (choice == 2) {
//   const deleteBook = prompt("What book do you want to delete");
//   const indexOfDelBook = books.indexOf(deleteBook);
//   if (indexOfDelBook !== -1) {
//     books.splice(indexOfDelBook, 1);
//     console.log(`${deleteBook} was removed`);
//   } else {
//     console.log(`${deleteBook} is not in your library`);
//   }
//   console.log(books);
// } else if (choice == 3) {
//   const bookToEdit = prompt("What book do you want to edit?");
//   const indexOfEditBook = books.indexOf(bookToEdit);
//   if (indexOfEditBook != -1) {
//     const newEditBook = prompt("What do you want tp change the book to?");
//     books[indexOfEditBook] = newEditBook;
//   } else {
//     alert(`${bookToEdit} dose not exist`);
//   }

//   console.log(books);
// }

// for (let i = 0; i <= 50; i++) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }

// const studentReports = [
//   { name: "Franklin", avgScore: 92, grade: "A" },
//   { name: "Peter", avgScore: 82, grade: "A" },
//   { name: "Cynthia", avgScore: 92, grade: "A" },
//   { name: "Manny", avgScore: 62, grade: "B" },
// ];

// console.log(studentReports[0]["name"]);
// console.log(
//   `${studentReports[0].name} got an average score of ${studentReports[0].avgScore} with a grade of${studentReports[0].grade}`,
// );

// console.log(
//   `${studentReports[0].name} got an average score of ${studentReports[0].avgScore} with a grade of${studentReports[0].grade}`,
// );

// studentReports.forEach(function (report, index, array){
//   console.log(
//     `${index + 1}. ${report.name} gpt an average score of ${report.avgScore} with a grade of ${report.grade}`
//   );
// });

// for (let i = 0; i < studentReports.length; i++) {
//   console.log(
//     `${studentReports[i].name} got an average score of ${studentReports[i].avgScore} with a grade of${studentReports[i].grade}`,
//   );
// }

// js toDo list
const todoList = ["reading", "coding", "school", "sleeping"];
const decision = Number(
  prompt(
    "what do you plan to do for the week \n 1. list out all your activities \n 2. Add another activity \n 3. Remove an activity \n 4. Edit an activity \n 5. Exit application",
  ),
);

if (decision == 1) {
  // todoList = ["reading", "coding", "school", "sleeping"];
  console.log(todoList);
}

if (decision == 2) {
  const newTodoList = prompt("What new activity do you want to add");
  todoList.push(newTodoList);
  console.log(todoList);
} else if (decision == 3) {
  const deleteTodoList = prompt("What activity do you want to delete");
  const indexOfDelTodoList = todoList.indexOf(deleteTodoList);
  if (indexOfDelTodoList !== -1) {
    todoList.splice(indexOfDelTodoList, 1);
    console.log(`${deleteTodoList} was removed`);
  } else console.log(`${deleteTodoList} is not in your activity`);
}

// -----------------------------FOR EAC H METHOD--------------------------------
// studentReport.forEach(function (reprt, index, array) {
//   console.log(
//     `{index + 1}. ${reportError.name} got an average score of ${reportError.avgScore} with a grade of ${reprt.grade},`,
//   );
// });

// // --------------------------------MAP METHOD---------------------------
// studentReports.map(function (report, index, arr) {
//   console.log(report.name);
// });

// const nos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mutiplestwo = nos.forEach(function (num, id, arr) {
//   return num * 2;
// });

// const mutiples2 = nos.map(function (number, id, arr) {
//   return number * 2;
// });

// console.log(mutiplestwo);
// console.log(mutiples2);

// // arryas of task an object consisiting of title

// const studentReports = [
//   { name: "Franklin", avgScore: 92, grade: "A" },
//   { name: "AI", avgScore: 42, grade: "A" },
//   { name: "EZE", avgScore: 81, grade: "A" },
//   { name: "Kelvin", avgScore: 72, grade: "A" },
//   { name: "David", avgScore: 32, grade: "A" },
// ];

// const numGreaterThan3 = nos.filter(function (num, id, arr) {
//   return num > 3;
// });
// const studentsThatPassed = studentReports.filter(function (report, id, arr) {
//   return report.avgScore >= 50;
// });

// console.log(numGreaterThan3);
// console.log(studentsThatPassed);

// class work

const task = [
  { title: "cooking", completed: true },
  { title: "coding", completed: false },
  { title: "playing football", completed: true },
  { title: "cooking", completed: true },
  { title: "marketing", completed: true },
  { title: "praying", completed: false },
  { title: "playing base ball", completed: true },
  { title: "sleeping", completed: false },
  { title: "walking", completed: true },
  { title: "Singing", completed: false },
];

// const taskTitle = task.filter(function (num, id, array) {
//   return task.title;
// });
// console.log;

// const completedTask = task.filter((task) => task.completed);
// console.log(completedTask);

const taskCompleted = task.filter(function (completed, id, array) {
  return completed.completed === true;
});
console.log(taskCompleted);
