document.addEventListener('DOMContentLoaded', function() {
    fetch('../json/clients.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tableBody');
        
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.Name}</td>
                <td>${user.Mobile}</td>
                <td>${user.Address}</td>
                <td>${user.Email}</td>
            `;
            tableBody.appendChild(row);
        });
});
})

