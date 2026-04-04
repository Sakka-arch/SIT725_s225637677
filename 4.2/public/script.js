// LOAD DOCUMENTARIES FROM DATABASE
function loadDocs() {
    fetch('/api/docs')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('movie-container');

            // Clear previous content
            container.innerHTML = "";

            // If no data
            if (data.length === 0) {
                container.innerHTML = "<p>No documentaries yet. Add one above.</p>";
                return;
            }

            // Display cards
            data.forEach(movie => {
                const card = `
                    <div class="col s12 m4">
                        <div class="card">
                            <div class="card-image">
                                <img src="${movie.image || 'https://via.placeholder.com/300'}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${movie.title || 'No title'}</span>
                                <p>Director: ${movie.director || 'Unknown'}</p>
                                <p>${movie.year || ''} ${movie.category ? '• ' + movie.category : ''}</p>
                                <p>${movie.rating ? '⭐ ' + movie.rating : ''}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        })
        .catch(err => console.error("Error loading docs:", err));
}

// ADD NEW DOCUMENTARY
const form = document.getElementById('doc-form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const doc = {
            title: document.getElementById('title').value,
            director: document.getElementById('director').value,
            category: document.getElementById('category').value,
            year: document.getElementById('year').value,
            rating: document.getElementById('rating').value,
            image: document.getElementById('image').value
        };

        fetch('/api/docs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
        .then(res => res.json())
        .then(() => {
            form.reset();   // clear form
            loadDocs();     // reload data
        })
        .catch(err => console.error("Error adding doc:", err));
    });
}

// INITIAL LOAD
loadDocs();