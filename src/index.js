require('dotenv').config();
const express = require('express');
const connection = require('./configs/database');
const bookRoute = require('./routes/book.route');
const userRoute = require('./routes/auth.route');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.use('/api/books', bookRoute);
app.use('/api/users', userRoute);

app.listen(port)