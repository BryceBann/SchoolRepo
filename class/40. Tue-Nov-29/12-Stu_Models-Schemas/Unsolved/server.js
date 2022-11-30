const express = require('express');
const db = require('./config/connection');
// TODO: Add a comment describing the functionality of the code below
// requireing the model for the server
const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-books', (req, res) => {
  // TODO: Add a comment describing the functionality of the code below
  // will find all books and will print out err if no books found and display book data when called
  Book.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
