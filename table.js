const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const footer = document.querySelector('#row-count');
const addButton = document.querySelector('#add-button');
const deleteButton = document.querySelector('#delete-button');
const moveUpButton = document.querySelector('#move-up-button');
const moveDownButton = document.querySelector('#move-down-button');

const rowContent = '<td>Wpisz</td>' +
    '<td>Wpisz</td>' +
    '<td contenteditable="false">' +
    '<input type="checkbox"/>' +
    '<button type="button" onclick="moveUp(this)">Góra</button>' +
    '<button type="button" onclick="moveDown(this)">Dół</button>' +
    '</td>'


table.addEventListener('click', () => {
    footer.innerHTML = tableBody.rows.length;
})

function addRow() {
    const newRow = tableBody.insertRow();
    newRow.innerHTML = rowContent;
}

function deleteRow() {
    Array.from(tableBody.rows).forEach(row => {
        if (row.getElementsByTagName('input')[0].checked)
            row.remove()
    })
}

function moveUp(element) {
    if (element.parentNode.parentNode.rowIndex === 1) return;

    const row = element.parentNode.parentNode;
    tableBody.insertBefore(row, row.previousElementSibling)
}

function moveDown(element) {
    if (element.parentNode.parentNode.rowIndex === tableBody.rows.length) return;

    const row = element.parentNode.parentNode;
    tableBody.insertBefore(row, row.nextElementSibling.nextElementSibling)
}