const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://omnistack9:omnistack9@cluster0-q8lu8.mongodb.net/semana9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes)

app.listen(3333)