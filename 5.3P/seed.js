const mongoose = require('mongoose');
const Book = require('./models/book.model');

async function seed() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

        console.log("Connected to MongoDB");

        await Book.deleteMany({});

        await Book.insertMany([
            {
                id: "b1",
                title: "The Three-Body Problem",
                author: "Liu Cixin",
                year: 2008,
                genre: "Science Fiction",
                summary: "The Three-Body Problem is the first novel...",
                price: mongoose.Types.Decimal128.fromString("19.99")
            }
        ]);

        console.log("Database seeded successfully");

    } catch (err) {
        console.error("Seeding error:", err);
    } finally {
        await mongoose.connection.close();
    }
}

seed();