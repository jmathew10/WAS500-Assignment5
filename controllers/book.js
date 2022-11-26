const express = require("express");
const api = express.Router();
const Book = require("../models/book");

// GET all books
api.get("/booksList", (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.render("books.ejs", { books: books });
    }
  });
});

// GET book by id
api.get("/books/:bookID", (req, res) => {
  Book.findOne({ id: req.params.bookID }, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.render("book.ejs", { book: book });
    }
  });
});

module.exports = api;
