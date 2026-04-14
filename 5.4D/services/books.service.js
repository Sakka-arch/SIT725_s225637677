const Book = require('../models/book.model');

async function getAllBooks() {
    return await Book.find();
}

async function getBookById(id) {
    return await Book.findOne({ id });
}

async function createBook(data) {
    return await Book.create(data);
}

async function updateBook(id, data) {
    delete data.id; // IMMUTABILITY ENFORCEMENT

    return await Book.findOneAndUpdate(
        { id },
        { $set: data },
        {
            new: true,
            runValidators: true
        }
    );
}

async function deleteBook(id) {
    return await Book.findOneAndDelete({ id });
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};