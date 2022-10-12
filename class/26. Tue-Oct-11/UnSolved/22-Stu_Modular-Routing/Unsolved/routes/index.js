const express = require('express');
const feedbackRouter = require('./feedbackRouter');

const app = express();

app.use('/feedback', feedbackRouter)

module.exports = app