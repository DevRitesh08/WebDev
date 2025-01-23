// Load saved timetable data when the page loads
window.onload = function() {
    const savedData = localStorage.getItem('timetableData');
    if (savedData) {
        document.querySelector('#timetable tbody').innerHTML = savedData;
    } else {
        // Add initial rows if no saved data exists
        for (let i = 0; i < 5; i++) {
            addRow();
        }
    }
};

function addRow() {
    const tbody = document.querySelector('#timetable tbody');
    const newRow = document.createElement('tr');
    
    // Add 6 cells (Time + 5 days)
    for (let i = 0; i < 6; i++) {
        const cell = document.createElement('td');
        cell.contentEditable = true;
        if (i === 0) {
            cell.textContent = '00:00';
        }
        newRow.appendChild(cell);
    }
    
    tbody.appendChild(newRow);
}

function saveTable() {
    const tbody = document.querySelector('#timetable tbody');
    localStorage.setItem('timetableData', tbody.innerHTML);
    alert('Timetable saved successfully!');
}