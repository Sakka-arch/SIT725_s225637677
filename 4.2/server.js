const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Serve index.html explicitly
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/docuAppDB');

// Schema
const documentarySchema = new mongoose.Schema({
    title: String,
    director: String,
    category: String,
    year: Number,
    rating: Number,
    image: String
});

const Documentary = mongoose.model('Documentary', documentarySchema);

// GET all
app.get('/api/docs', async (req, res) => {
    const docs = await Documentary.find();
    res.json(docs);
});

// POST new
app.post('/api/docs', async (req, res) => {
    const doc = new Documentary(req.body);
    await doc.save();
    res.json({ message: "Saved successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});