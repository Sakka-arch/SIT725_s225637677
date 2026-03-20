const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.send('Task 1.2P');
});

// Add numbers endpoint
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send('Please provide valid numbers');
    }

    res.send(`Result: ${a + b}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
