const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
// git comands for heroku
// heroku auth:login -will ask to press any key and will opne webpage for login
// git init -will initialize a empty git repo
// git add . -will add to git repo
// git commit -m "" -will commit to repo
// heroku dreate -will create random url
// git remote -v -not to sure
// git push heroku main -will push to heroku may not work use comand line below does same
// git push heroku HEAD:main