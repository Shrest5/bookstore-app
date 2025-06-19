import React from 'react';

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book._id}>{book.title} by {book.author} - ₹{book.price}</li>
    ))}
  </ul>
);

export default BookList;