const router = require('express');
const movieRouter = require('./movieRoutes');
const reviewRouter = require('./reviewsRouter');

const app = express();

app.use('/movies', movieRouter);
app.use('/reviews', reviewRouter);

module.exports = app;