
function generateCalendar(year, month) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = '';

    const date = new Date(year, month);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        const th = document.createElement('th');
        th.textContent = weekdays[i];
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    let dateCounter = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const td = document.createElement('td');
            if (i === 0 && j < firstDay)  
            {
                td.textContent = '';
            }
             else if (dateCounter>daysInMonth) {
                break;
            } else {
                td.textContent = dateCounter;
                dateCounter++;
            }
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    calendarDiv.appendChild(table);
}

// Call generateCalendar function with current year and month
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
generateCalendar(currentYear, currentMonth);


