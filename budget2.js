const budgeti = document.querySelector("#budget");
const expensei = document.querySelector("#expense");
const expenseamt = document.querySelector("#expense-amt");
const budgetBtn = document.querySelector("#budgetBtn");
const expenseBtn = document.querySelector("#expenseBtn");
const totalbudget = document.querySelector("#totalBudget");
const totalExpense = document.querySelector("#totalExpense");
const totalbalance = document.querySelector("#totalBalance");
const expensedisplay = document.querySelector("#expensedisplay");

let budget = 0;
let expense = 0;
let balance = 0;

const expenseArr = [];

budgetBtn.addEventListener("click", function () {
  budget += Number(budgeti.value);
  totalbudget.textContent = budget;

  balance += Number(budgeti.value);
  totalbudget.textContent = balance;
  budgeti.value = "";
});

expenseBtn.addEventListener("click", function () {
  expense += Number(expenseamt.value);
  totalExpense.textContent = expense;

  balance -= Number(expenseamt.value);

  totalbalance.textContent = balance;

  expenseArr.push({
    Title: expensei.value,
    value: expenseamt.value,
  });

  console.log(expenseArr);
  expenseamt.value = "";
  expensei.value = "";
  displayExpense();
  console.log(balance);
});

function displayExpense() {
  expensedisplay.innerHTML = "";

  expenseArr.forEach(function (exp, id) {
    const expTitle = document.createElement("li");
    expTitle.classList.add("display-exp");
    expTitle.innerHTML = `
    <p>${exp.Title}</p>
    <p>${exp.value}</p>
    <button onclick="delexp(${id})">Delete</button>`;

    expensedisplay.appendChild(expTitle);
  });
}

function delexp(id) {
  balance += Number(expenseArr[id].value);
  expense -= Number(expenseArr[id].value);
  console.log(balance);
  totalbalance.textContent = balance;
  totalExpense.textContent = expense;
  expenseArr.splice(id, 1);
  displayExpense();
}
