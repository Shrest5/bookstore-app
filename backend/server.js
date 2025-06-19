const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/bookstore');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});
const Book = mongoose.model('Book', bookSchema);

app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post('/books', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
