// Fetch and display all books
function loadBooks() {
    fetch('/api/books')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('book-list');

            // clear existing content
            container.innerHTML = "";

            // if no books
            if (data.length === 0) {
                container.innerHTML = "<p>No books available.</p>";
                return;
            }

            // loop through books
            data.forEach(book => {
                const item = document.createElement('li');

                item.innerHTML = `
                    <strong>${book.title}</strong> - ${book.author}<br>
                    <small>${book.genre} • ${book.year}</small><br>
                    <p>${book.summary}</p>
                    <hr>
                `;

                container.appendChild(item);
            });
        })
        .catch(err => {
            console.error("Error fetching books:", err);
        });
}

// Load books on page load
document.addEventListener('DOMContentLoaded', loadBooks);