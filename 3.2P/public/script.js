fetch('/api/movies')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('movie-container');

        data.forEach(movie => {
            const card = `
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${movie.image}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${movie.title}</span>
                            <p>Director: ${movie.director}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    });