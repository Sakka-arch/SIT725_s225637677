const mongoose = require('mongoose');
const Book = require('./models/book.model');

async function seed() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

        await Book.deleteMany({});

        await Book.insertMany([
            {
                id: "b1",
                title: "The Three-Body Problem",
                author: "Liu Cixin",
                year: 2008,
                genre: "Science Fiction",
                summary: "Alien civilisation and orbital mechanics story.",
                price: mongoose.Types.Decimal128.fromString("19.99")
            },
            {
                id: "b2",
                title: "Jane Eyre",
                author: "Charlotte Brontë",
                year: 1847,
                genre: "Classic",
                summary: "Orphaned governess story of independence.",
                price: mongoose.Types.Decimal128.fromString("14.50")
            },
            {
                id: "b3",
                title: "Pride and Prejudice",
                author: "Jane Austen",
                year: 1813,
                genre: "Classic",
                summary: "Love, pride, and social class.",
                price: mongoose.Types.Decimal128.fromString("16.00")
            },
            {
                id: "b4",
                title: "The English Patient",
                author: "Michael Ondaatje",
                year: 1992,
                genre: "Historical Fiction",
                summary: "WWII villa and memory.",
                price: mongoose.Types.Decimal128.fromString("18.75")
            },
            {
                id: "b5",
                title: "Small Gods",
                author: "Terry Pratchett",
                year: 1992,
                genre: "Fantasy",
                summary: "A tortoise god and belief system satire.",
                price: mongoose.Types.Decimal128.fromString("17.25")
            }
        ]);

        console.log("Database seeded successfully");

    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.connection.close();
    }
}

seed();