const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        immutable: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },

    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },

    author: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 60
    },

    year: {
        type: Number,
        required: true,
        min: 1450,
        max: new Date().getFullYear()
    },

    genre: {
        type: String,
        required: true,
        enum: ['fiction', 'non-fiction', 'fantasy', 'history', 'biography', 'science']
    },

    summary: {
        type: String,
        maxlength: 500
    },

    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
        min: 0
    }
}, {
    versionKey: false,
    strict: "throw" // 🚨 rejects unknown fields (SAFE WRITE requirement)
});

module.exports = mongoose.model('Book', bookSchema);