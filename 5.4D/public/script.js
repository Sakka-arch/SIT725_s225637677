function loadBooks() {
    fetch('/api/books')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('book-list');
            container.innerHTML = "";

            data.forEach(book => {
                const div = document.createElement('div');

                div.innerHTML = `
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p>${book.genre} • ${book.year}</p>
                    <p>${book.summary}</p>
                    <p><strong>Price:</strong> $${parseFloat(book.price.$numberDecimal).toFixed(2)} AUD</p>
                    
                    <button onclick="deleteBook('${book.id}')">Delete</button>
                    <hr>
                `;

                container.appendChild(div);
            });
        });
}

document.getElementById('book-form').addEventListener('submit', async e => {
    e.preventDefault();

    const newBook = {
        id: document.getElementById('id').value,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        year: Number(document.getElementById('year').value),
        genre: document.getElementById('genre').value,
        summary: document.getElementById('summary').value,
        price: Number(document.getElementById('price').value)
    };

    const res = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook)
    });

    if (!res.ok) {
        const err = await res.json();
        console.log("ERROR:", err);
        alert(err.message);
        return;
    }

    loadBooks();
});

function deleteBook(id) {
    fetch(`/api/books/${id}`, {
        method: 'DELETE'
    }).then(() => loadBooks());
}

loadBooks();