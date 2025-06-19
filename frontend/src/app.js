import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books').then(res => res.json()).then(setBooks);
  }, []);

  return (
    <div>
      <h1>Bookstore</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title} - ₹{book.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
