const express = require('express');
const app = express();
const PORT = 3000;

const bookRoutes = require('./routes/books.routes');

app.use(express.static('public'));
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});