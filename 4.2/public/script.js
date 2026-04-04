// LOAD DOCUMENTARIES
function loadDocs() {
    fetch('/api/docs')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('movie-container');
            container.innerHTML = "";

            if (data.length === 0) {
                container.innerHTML = "<p>No documentaries yet.</p>";
                return;
            }

            data.forEach(movie => {
                const card = `
                    <div class="col s12 m4">
                        <div class="card">
                            <div class="card-image">
                                <img src="${movie.image || 'https://via.placeholder.com/300'}">
                            </div>
                            <div class="card-content">
                                <span class="card-title">${movie.title}</span>
                                <p>${movie.director}</p>
                                <p>${movie.year || ''} ${movie.category || ''}</p>
                                <p>${movie.rating ? '⭐ ' + movie.rating : ''}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        })
        .catch(err => console.error(err));
}

// FORM SUBMIT
const form = document.getElementById('doc-form');

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(doc)
    })
    .then(() => {
        form.reset();
        loadDocs();
    })
    .catch(err => console.error(err));
});

document.getElementById('load-btn').addEventListener('click', loadDocs);

// Optional: auto-load on page load
loadDocs();