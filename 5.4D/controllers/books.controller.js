const bookService = require('../services/books.service');

async function getAllBooks(req, res) {
    const books = await bookService.getAllBooks();
    res.json(books);
}

async function getBookById(req, res) {
    const book = await bookService.getBookById(req.params.id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
}

async function createBook(req, res) {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "Duplicate book id" });
        }
        return res.status(400).json({ message: err.message });
    }
}

async function updateBook(req, res) {
    try {
        const book = await bookService.updateBook(req.params.id, req.body);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(book);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

async function deleteBook(req, res) {
    const book = await bookService.deleteBook(req.params.id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Deleted" });
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};