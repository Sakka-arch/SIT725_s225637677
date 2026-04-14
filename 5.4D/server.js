const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/booksDB')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const bookRoutes = require('./routes/books.routes');
app.use('/api/books', bookRoutes);

app.get('/api/integrity-check42', (req, res) => {
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});