const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            title: "Inception",
            director: "Christopher Nolan",
            image: "images/inception.jpg"
        },
        {
            title: "Interstellar",
            director: "Christopher Nolan",
            image: "images/interstellar.jpg"
        },
        {
            title: "The Matrix",
            director: "Wachowski Sisters",
            image: "images/matrix.jpg"
        }
    ];

    res.json(movies);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});