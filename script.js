document.addEventListener('DOMContentLoaded', () => {
    const csvFilePath = 'data.csv'; // Path to your CSV file

    fetch(csvFilePath)
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').map(row => row.split(','));

            // Populate table headers
            const tableHead = document.getElementById('tableHead');
            const headers = rows.shift();
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header.trim();
                tableHead.appendChild(th);
            });

            // Populate table body
            const tableBody = document.getElementById('tableBody');
            rows.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell.trim();
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error loading CSV file:', error));
});
