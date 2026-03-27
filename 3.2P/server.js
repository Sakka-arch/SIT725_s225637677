const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            title: "Rocking the Foundations",
            director: "Various",
            image: "images/foundations.jpg"
        },
        {
            title: "The Enemy Within",
            director: "BBC",
            image: "images/enemy.jpg"
        },
        {
            title: "The Square",
            director: "Jehane Noujaim",
            image: "images/square.jpg"
        }
    ];

    res.json(movies);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});