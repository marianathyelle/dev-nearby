const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://marianathyelle:WHxqAT0wBBmlVk9q@cluster0-wmdy6.mongodb.net/dev-nearby?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333) 