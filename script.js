document.getElementById('add-btn').addEventListener('click', addExpense);

function addExpense() {
    const categorySelect = document.getElementById('category-select');
    const amountInput = document.getElementById('amount-input');
    const dateInput = document.getElementById('date-input');

    const category = categorySelect.options[categorySelect.selectedIndex].value;
    const amount = amountInput.value;
    const date = dateInput.value;

    const tableBody = document.getElementById('expense-table-body');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${category}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    const deleteBtn = row.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteExpense);

    updateTotalAmount();
}

function deleteExpense() {
    const row = this.parentElement.parentElement;
    row.parentElement.removeChild(row);
    updateTotalAmount();
}

function updateTotalAmount() {
    let totalAmount = 0;
    const amountCells = document.querySelectorAll('#expense-table-body td:nth-child(2)');

    amountCells.forEach(cell => {
        totalAmount += parseFloat(cell.textContent);
    });

    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}