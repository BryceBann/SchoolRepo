//requiring the epress and mysql2 from the node package
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creating the connection to the data base 
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'TKgw=l$+BPCb',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
