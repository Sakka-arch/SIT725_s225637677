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