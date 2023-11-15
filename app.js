let expenses = [];

const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
if (storedExpenses) {
    expenses = storedExpenses;
}

function addExpanse() {
    const name = document.getElementById('expense-name').value;
    const amount  = parseFloat(document.getElementById('expense-amount').value);
    const date = document.getElementById('expense-date').value;
    
    if(name && !isNaN(amount) && date) {
        const expense = {name , amount, date};
        expense.push(expense);
        saveToLocalStorage();
        displayExpenses();
        calculateTotal();
        clearForm();
    }else {
        alert('wprowadz poprawne dane.');
    }
}

function displayExpenses() {
    const expenseList = document.getElementById('expanse-list');
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) =>{
        const listItem = document.createElement('div');
        listItem.classList.add('expense-list');
        listItem.innerHTML = `
            <span>${expense.name}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <span>${expense.date}</span>
            <button onclick="deleteExpense(${index})">Usuń</button>`;
            expenseList.appendChild(listItem)
    });
}

function deleteExpense(index) {
    expenses.splice(index,1);
    saveToLocalStorage();
    displayExpenses();
    calculateTotal();
}


function calculateTotal (){
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount,0);
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

}

function saveToLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function clearForm() {
    document.getElementById('expenses-form').reset();
}

displayExpenses();
calculateTotal();




