document.addEventListener('DOMContentLoaded', function() {
    // Define a function to fetch data and populate the table
    function fetchDataAndPopulateTable() {
        fetch('../json/clients.json')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById('tableBody');
                
                // Clear existing table rows
                tableBody.innerHTML = '';

                // Iterate through the data and create table rows
                data.forEach(user => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.username}</td>
                        <td>${user.phone}</td>
                        <td>${user.address}</td>
                        <td>${user.email}</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Attach event listener to the fetch button
    const fetchButton = document.querySelector('.btn-primary');
    fetchButton.addEventListener('click', fetchDataAndPopulateTable);

    // Call fetchDataAndPopulateTable initially to populate the table when the page loads
    // fetchDataAndPopulateTable();
});