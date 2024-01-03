const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let books = [];
let nextId = 1;

// Middleware for parsing incoming JSON data
app.use(bodyParser.json());

// POST route for saving book details
app.post('/books', (req, res) => {
  const { name, author, price } = req.body;

  if (!name || !author || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const book = {
    id: nextId++,
    name,
    author,
    price,
  };

  books.push(book);

  res.json(book);
  console.log(book)
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
