const budgetEl = document.querySelector("#budget");
const expenseEl = document.querySelector("#expense");
const expenseAmtEl = document.querySelector("#expense-Amt");
const totalBudget = document.querySelector("#total-budget");
const budgetBtn = document.querySelector("#budgetBtn");
const balanceEl = document.querySelector("#balanceEl");
const expenseBtn = document.querySelector("#expenseBtn");
const totalExpense = document.querySelector("#total-Expense");
const expDisplay = document.querySelector("#expDisplay");

let budget = 0;
let expense = 0;
let balance = 0;

const expenseArr = [];

budgetBtn.addEventListener("click", function () {
  budget += Number(budgetEl.value);
  totalBudget.textContent = budget;

  balance += Number(budgetEl.value);

  balanceEl.textContent = balance;

  budgetEl.value = "";
});

expenseBtn.addEventListener("click", function () {
  expense += Number(expenseAmtEl.value);
  totalExpense.textContent = expense;

  balance -= Number(expenseAmtEl.value);

  balanceEl.textContent = balance;

  expenseArr.push({
    Title: expenseEl.value,
    value: expenseAmtEl.value,
  });

  console.log(expenseArr);
  expenseAmtEl.value = "";
  expenseEl.value = "";
  displayExpense();

  console.log(balance);
});

function displayExpense() {
  expDisplay.innerHTML = "";

  expenseArr.forEach(function (exp, id) {
    const expTitle = document.createElement("li");
    expTitle.classList.add("display-exp");
    expTitle.innerHTML = `
    <p>${exp.Title}</p>
    <p>${exp.value}</p>
    <button onclick="delexp(${id})">Delete</button>`;

    expDisplay.appendChild(expTitle);
  });
}

function delexp(id) {
  balance += Number(expenseArr[id].value);
  expense -= Number(expenseArr[id].value);
  console.log(balance);
  balanceEl.textContent = balance;
  totalExpense.textContent = expense;
  expenseArr.splice(id, 1);
  displayExpense();
}
