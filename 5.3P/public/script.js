function loadBooks() {
    fetch('/api/books')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('book-list');
            container.innerHTML = '';

            if (data.length === 0) {
                container.innerHTML = '<p>No books available.</p>';
                return;
            }

            data.forEach(book => {
                const item = document.createElement('li');
                const price = book.price && book.price.$numberDecimal
                    ? parseFloat(book.price.$numberDecimal).toFixed(2)
                    : 'N/A';

                item.innerHTML = `
                    <strong>${book.title}</strong> - ${book.author}<br>
                    <small>${book.genre} &bull; ${book.year}</small><br>
                    <small>AUD $${price}</small>
                    <p>${book.summary}</p>
                    <hr>
                `;

                container.appendChild(item);
            });
        })
        .catch(err => {
            console.error('Error fetching books:', err);
        });
}

document.addEventListener('DOMContentLoaded', loadBooks);