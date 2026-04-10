const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/booksDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const bookRoutes = require('./routes/books.routes');

app.use(express.static('public'));
app.use('/api/books', bookRoutes);

// integrity route
app.get('/api/integrity-check42', (req, res) => {
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});